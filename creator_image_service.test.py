import importlib.util
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch


MODULE_PATH = Path(__file__).with_name("creator_image_service.py")
SPEC = importlib.util.spec_from_file_location("creator_image_service", MODULE_PATH)
service = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(service)


class DeploymentBehaviorTest(unittest.TestCase):
    def test_forwarded_https_base_url_is_used_for_generated_assets(self):
        headers = {
            "Host": "suguang.example.com",
            "X-Forwarded-Proto": "https",
        }

        self.assertEqual(service.resolve_public_base_url(headers), "https://suguang.example.com")

    def test_static_server_only_exposes_outputs_directory(self):
        landing_path = service.resolve_static_path("/outputs/landing.html")
        blocked_path = service.resolve_static_path("/work/creator_image_service.py")

        self.assertEqual(landing_path, service.OUTPUTS_DIR / "landing.html")
        self.assertIsNone(blocked_path)

    def test_published_games_are_persisted_and_listed(self):
        game = {
            "id": "sg-test-game",
            "title": "测试作品",
            "description": "公开作品",
            "visibility": "public",
            "createdAt": "2026-07-21T00:00:00+0800",
            "nodes": [{"id": "01", "text": "开始"}],
        }

        with tempfile.TemporaryDirectory() as tmp:
            with patch.object(service, "PUBLISHED_GAMES_DIR", Path(tmp)):
                saved = service.save_published_game(game)
                loaded = service.load_published_game("sg-test-game")
                listed = service.list_published_games()

        self.assertEqual(saved["id"], "sg-test-game")
        self.assertEqual(loaded["title"], "测试作品")
        self.assertEqual(listed[0]["id"], "sg-test-game")


if __name__ == "__main__":
    unittest.main()

# 阿里云部署

## 目标

上线后支持：
- `landing.html` 主页
- `creator.html` 创作与发布
- `player.html` 试玩
- `/api/image/*` 批量生图
- `/api/game` 服务器作品库

## 部署方式

推荐 `Docker Compose + Caddy`。

## 步骤

1. 准备一台阿里云 ECS，开放安全组 `80` 和 `443`。
2. 把域名 A 记录指向这台 ECS 公网 IP。
3. 安装 Docker 和 Compose。
4. 复制项目到服务器。
5. 复制 `.env.example` 为 `.env`，填入：
   - `SUGUANG_DOMAIN`
   - `PUBLIC_BASE_URL`
   - `OPENAI_API_KEY`
   - `OPENAI_BASE_URL`
6. 启动：

```bash
docker compose up -d --build
```

## 访问

- 首页：`https://你的域名/outputs/landing.html`
- 创作页：`https://你的域名/outputs/creator.html`

## 备注

- 公开广场作品保存在服务器的 `work/published-games`
- 生成图片保存在服务器的 `outputs/assets/generated`
- 如果你只想本地跑，把 `SUGUANG_DOMAIN` 留空也能起服务，但不会自动签 HTTPS

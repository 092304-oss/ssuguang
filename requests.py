import json as json_lib
import urllib.error
import urllib.request


class Response:
    def __init__(self, status_code, content):
        self.status_code = status_code
        self.content = content
        self.ok = 200 <= status_code < 300

    def json(self):
        return json_lib.loads(self.content.decode("utf-8"))

    def raise_for_status(self):
        if not self.ok:
            raise RuntimeError(f"HTTP {self.status_code}: {self.content[:500]!r}")


def _request(method, url, headers=None, json=None, timeout=None):
    data = None
    req_headers = dict(headers or {})
    if json is not None:
        data = json_lib.dumps(json).encode("utf-8")
        req_headers.setdefault("Content-Type", "application/json")
    request = urllib.request.Request(url, data=data, headers=req_headers, method=method)
    try:
        with urllib.request.urlopen(request, timeout=timeout) as resp:
            return Response(resp.status, resp.read())
    except urllib.error.HTTPError as exc:
        return Response(exc.code, exc.read())


def post(url, headers=None, json=None, timeout=None):
    return _request("POST", url, headers=headers, json=json, timeout=timeout)


def get(url, timeout=None):
    return _request("GET", url, timeout=timeout)

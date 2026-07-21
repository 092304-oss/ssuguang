FROM python:3.11-slim

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    HOST=0.0.0.0 \
    PORT=4175

COPY outputs ./outputs
COPY work/creator_image_service.py ./work/creator_image_service.py
COPY deploy/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh

RUN chmod +x /usr/local/bin/docker-entrypoint.sh \
    && mkdir -p /app/seed/generated \
    && cp -a /app/outputs/assets/generated/. /app/seed/generated/ \
    && mkdir -p /app/work/creator-image-jobs /app/work/published-games

EXPOSE 4175

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
CMD ["python3", "/app/work/creator_image_service.py", "--host", "0.0.0.0", "--port", "4175"]

import logging
from django.utils.deprecation import MiddlewareMixin

logger = logging.getLogger('myapp')

class RequestResponseLoggingMiddleware(MiddlewareMixin):
    def process_request(self, request):
        logger.info(f"Request: {request.method} {request.path} - Data: {request.body}")

    def process_response(self, request, response):
        logger.info(f"Response: {response.status_code} - Content: {response.content}")
        return response

    def process_exception(self, request, exception):
        logger.error(f"Exception: {str(exception)}", exc_info=True)

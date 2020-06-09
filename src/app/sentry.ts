import { Injectable, ErrorHandler } from '@angular/core';

import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://6a67984f1a554849b7085653fc7f531f@sentry.io/1327375',
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  handleError(error) {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}

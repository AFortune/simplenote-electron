/**
 * External dependencies
 */
import showdown from 'showdown';

/**
 * Internal dependencies
 */
import { sanitizeHtml } from './sanitize-html';

const markdownConverter = new showdown.Converter();
markdownConverter.setFlavor('github');

export const renderNoteToHtml = content => {
  const rendered = markdownConverter.makeHtml(content);

  return sanitizeHtml(rendered);
};

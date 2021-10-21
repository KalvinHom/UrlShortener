function validateUrl(url) {
  let valid = true;

  valid = validateWhitespace(url);

  try {
    const validUrl = new URL(url);
    valid = valid && validateProtocol(validUrl.protocol);
  } catch (_) {
    valid = false;
  }

  return valid;
}

function validateProtocol(protocol) {
  return protocol === "http:" || protocol === "https:";
}

function validateWhitespace(url) {
  return !/\s/.test(url);
}

export default validateUrl;

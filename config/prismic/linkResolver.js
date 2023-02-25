// eslint-disable-next-line no-undef
exports.linkResolver = (doc) => {
  switch (doc.type) {
    case "home_page": {
      return "/";
    }

    case "page": {
      return `/${doc.uid}`;
    }

    default:
      if (!doc.uid) return "/";
      return `/pages/${doc.uid}`;
  }
};

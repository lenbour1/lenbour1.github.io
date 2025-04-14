hexo.extend.injector.register('body_end', () => {
    return '<script defer src="/_vercel/insights/script.js"></script>';
  });
module.exports = {
  native: true,
  typescript: true,
  dimensions: false,
  expandProps: 'end',
  prettier: true,
  replaceAttrValues: {
    currentColor: '{props.color}',
  },
  svgProps: {
    width: '{props.width ?? 24}',
    height: '{props.height ?? 24}',
  },
};

const visit = require('unist-util-visit');
const path = require('path')
const _ = require(`lodash`);
const slash = require(`slash`);


module.exports = ({ files, markdownAST, markdownNode, getNode }) => {
  visit(markdownAST, 'image', node => {
    if (node.url) {
        if (node.url.indexOf('/img') === 0) {
          const imageNode = _.find(files, file => {
            imagePath = slash(path.join(file.dir, path.basename(node.url)));
            return path.normalize(file.absolutePath) === imagePath;
          });
          if (imageNode) {
              // Get the markdown file's parent directory
            const parentDirectory = getNode(markdownNode.parent).dir;
            // Make the image src relative to the markdown file
            node.url = path.relative(parentDirectory, imagePath);
          }
        }
      }
  });

  return markdownAST;
};
import fs from 'fs';

class ManifestPlugin {
  constructor(options = {}) {
    if (!options.path) {
      throw new Error('Manifest path must be set using `options.path`.');
    }

    this.path = options.path;
  }

  apply(compiler) {
    const writeManifest = (stats) => {
      fs.writeFileSync(`${this.path}/manifest.json`, `${JSON.stringify({ hash: stats.hash }, null, 2)}\n`);
    };

    compiler.plugin('done', writeManifest.bind(this));
  }
}

export default ManifestPlugin;

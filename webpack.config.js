/* eslint-disable */
module.exports = {
  output: {
    library: 'ReactLeaflet',
    libraryTarget: 'umd'
  },
  externals: [
    {
      leaflet: {
        amd: 'leaflet',
        commonjs: 'leaflet',
        commonjs2: 'leaflet',
        root: 'L'
      },
    },
    {
      'react-leaflet': {
        amd: 'react-leaflet',
        commonjs: 'react-leaflet',
        commonjs2: 'react-leaflet'
      }
    },
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'google-maps': {
        amd: 'google-maps',
        commonjs: 'google-maps',
        commonjs2: 'google-maps',
        root: 'GoogleMapsLoader'
      }
    }
  ],
  mode: "production",
  module: {
		rules: [
            {
                test: /\.(js|jsx)$/,
				use: {
					loader: "babel-loader",
					options: {
					  presets: ["@babel/preset-env"],
					}
				  },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
	}
};


import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss'

export default {
  plugins: [
    process.env.NODE_ENV === 'production' &&
      purgeCSSPlugin({
        content: [
          './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
          './storage/framework/views/*.php',
          './resources/**/*.blade.php',
          './resources/**/*.{ts,tsx,js,jsx}',
        ],
        keyframes: true,
        variables: true,
      }),
  ],
}

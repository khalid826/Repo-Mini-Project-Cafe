module.exports = {
    content: [
        "./*.html",
        "./pages/**/*.html"
    ],
    theme: {
        extend: {
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        textAlign: 'justify',
                    },
                },
            }),
        },
    },
    plugins: [],
};

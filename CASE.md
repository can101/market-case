This is a hiring challenge for a Market Application that requires the development of an application with three different screens:

1. Product list: This screen will contain all products, and two filters will be available: search by product name and sorting by product priority and price. Products can be added to the cart or favorites from this screen. If the product is already in the cart, the amount will be updated.

2. Favorites list: This screen will show the products added to the user's favorites.

3. Cart: This screen will show the products in the user's cart, where they can be added or removed, and the total cart price will be displayed.

The application should be developed using React.js and Typescript and use Redux Toolkit for state management. The folder structure should follow industry standards, and the CSS preprocessor used should be SCSS with module CSS structure. A day and night mode feature should be included.

The product data should be obtained using Axios, and loading and error states should be managed. At least one custom hook should be used, and React Router DOM should be used for routing.

The optional page should include a form for the delivery address and personal information, which will include a list of previously saved addresses. Formik or another form validation package can be used to check the required fields: city, district, address, door number, name, surname, and phone number. All fields except door number are required, and the name and surname should be at least two characters long.

Additional features that can be included for extra points include the ability to show the number of items added to favorites, display the total number of items in the cart, and the ability to add new addresses.

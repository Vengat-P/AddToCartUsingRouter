# Add To Cart Task Using React Router

## Overview

Create a separate page for product and cart functionality, including the ability to add and remove items from the cart, and ensure proper routing within a ReactJS application using **ReactJs**, **HTML**,**TailwindCss** And **javascript**.

## Tech Stack

- **ReactJs** and **HTML** for structure
- **TailwindCss** for styling
- **Axios** to Fetch API data
- **Daisyui** to add Components for Tailwind Style
- **VSCode** for development
- **JavaScript** for applying logics
- **React-Router-dom** for acessing routers(pacakge)

## Logics

- **Routing -**
- **Step1** create BrowserRouter within side create one div (this will be first) for Navbar Component (Because SPA - I NEED ALL PAGE WILL ACCESS NAVBAR). Second create Routes inside of this all routes are there ("/"-Home page(ProductsHome) , "/product"-particular product details when you click more info, "/CartLists"-CartLists page (added cart items will show here), "*"-nomatch route (PagenotFound)). and last make one div for footer component to show all pages .

- **In Navbar Component -** these component has 3 link tags one is shopify ,home and cart icon.
  by using link tage i connect to parameter as path. for shopify - product home page and home also same . for cartlogo will goto cartlist page

- **Logics -**
- **Step1** Create two hooks one for products (useState) and another one for fetch data from Api(use effect).
  useState has empty array and fetchdata funtion for fetching data from api by using axios get method and store that data in product state.
- **Step2** Inside of ProductHome page route passing products state after maping with condition of if products are ther in product state products will display with unique key word in any case data is not coming from api then data not found wordings will show.
- **Step3** in ProductHome page set product card to show dynamic data of products from app component.inside of this card include product image,product title ,product price,product rating and button with conditional rendering .for this conditional rendering create one usestate in the name of status. if status is true then add to cart button will show . status is false remove from cart button will show. add to cart button has onlclick function in the name of handleSubmit and removeFrom cart button has handleRemove function.then call these two function in javascript function as of now .now product will display in ProductHome page .
- **Step4** next we need to added cart items will show in Cartlist page. for that create two states one state for cartItems with empty array to store added list and another one for state for showing how many added items in cart in the name of count. pass these two state details in productHome page route link (already products mapped just pass details)
- **Step5** get those state details in parameter. then inside of hadleSubmit setStatus(false) because after clicking add to cart button that button will change automatically remove from cart . this function will has function for setCartItem and set count to store added product with resirict condition same id not allowed if its same return spread operator of cartitems and not same that will return spread operator of cartitems with clicked product detail and setcount function will increase the value of count every product if you added.
  Handle remove function also same like this but there using filter function to show remaining cartItems and inside of this setStatus will be true and setCount will decrese the count value .

- **Step6** now make one div in cartLists route then to show cartItmes in CartLists page pass all value of cartItmes as a props after maping the all the added product will show . pass count state details and cartItems states as props.then go to cartlists page component make a card for showing added cart items with image ,product title,product price,quantity div with increment and decrement function with value buttons and removeFrom cart butteon this button has onClick handleRemove function. this handle remove function setCount function with condition. if count greater than 0 then i can able to decrese count after clicking. here we cant remove cartItem of what i click for that we need to create one removeFunction in app component then pass that function to cartlist page. now get that removefunction inside of handleRemove function and pass parameter as what i clicked cart item . now go back to app component and inside of removefunction get cartitem details and filter cartitems what i clicked remove button in that cartItem id and check not matching remaing id and store that filterProducts in setcartItem using spread operator

- **Step7** now to show more details about product pass state of info same like cartItem state details and passing count state details also if i add inside of product page. then count will need to increase so that. and now go to product page . pass these states in product home page route as well there in cart make one button(more info) with link connection of product page . this button will have onclick function name of detailSubmit . this function will give you particluar product details setInfo function with return of that product detail into info state. now that info has details we can display in product page. here no need to maping i already get selected product details. now add to cart and removefrom cart function . this will be same like productsHome page so we can do same like that passing neccesary states and update setfunction occording to that.

- **Step8** all the page works completed now i want show quantity increment and decrement function and total prices, total amount and discounted price in cartList. for this make one state in app component name total this initial will have empty array and passing these state into producthomepage route,product page route and cartlist page route. all three place interlinked for updating total amount. when ever i add cart my amount will be show so in product home page inside of handlesubmit function setTotal array passing only product price which i clicked that product. here already we have condition so just store occording to that using spread operator.and Handleremove also setTotal array of filteredTotal using spread operator. same like we need to update in product page diffrence is producthome page we passing product and cartitem prices but in product we stored array as info so we need to pass info price. Now i have what i clicked add cart or remove cart that details in Total state.

- **Step9** now in cartlist we have increment and decrement of quantity function also. to store these details create one state name of quantity with initial value one(because when i add cart automatically one will show). now increment function will setQuntity value occording to my click. and inside of this functio i add settotal function also because when i increase quantity total state of array also increse by using spread Operator and passing product price which product i click increment button. now decrement function this will has condition if my
  quantity greater than 1 then only i can able to decrese value of quantity setQuantity function occording to that.and inside of this to set Total function for updating total array which i click remove for that we can make one function in app component name is removeTotal and passing that state to neccesary states. now in decrement function call that function and pass parameter total. now remove total function will has which product quantity decresed occording to that we need to remove last element form total array . For this using splice method and starting index will be total.length-1 because when we add incremented price in increment function passing price using spread operator so data will add last we need to remove that price only so we pass this total.length-1 to get last index and 1 elemnent need to remove after that setTotal using spread operator passing only remaing total

- **Step10** to find total price of your cart list we added all the necessary function into Total state. now we can create two div in carlists Route one for display total amount and another one div for final amount after discounted 10 %. first div inside i use reduce method to sum all the prices of total array. this will give me total amount. now another div inside inside of curly braces i create two bracket first bracket minus second bracket . inside of first bracket i use reduce method to find the total price amount of total array. and second bracket inside (10/100)* reduce method sum of total amount. (total amount - 10% of total amount) this is concept of discount value .

- **Step11** in cartLits particulat product total price is there. we need to update these total.we already have quantity state so we cane simply multiply cartitem.price and quantity to find total price of particular product

## How to Use

- **step-1 -** you will land ProductHome page .Click the Add to Cart button which you want to added to your cart . if you click add to cart button suddenly remove cart button will show. you can add and remove both function will do in producthome page

- **step-2 -** click cart icon it will go to cartLists page. You can see the total number of cartItems in top rightside of that cart icon.and cart items list. you can increase quantity for same product more quantity. you can see the cumulative total price of that product and all cart products cumulative amount in bottom of the page. you can see your 10 % discounted of all products (total cart itmes including quantity as well) amount . you want to go back to home just click home button in nav bar or click shopify that redirect you to product home page

- **step-3 -** If you want to remove any of product from your CartItem just click Remove From Cart button. you will see remaining cartItems.

- **step-4 -** if you want to know more details about click more info of which product you select. that will go to that product page you can add and remove cart item from there also you can do. click back to home button will get you home page

## Features

- Responsive Design
- Clean and Minimalistic Layout

## Demo

- https://addtocart-using-router-e-shop.netlify.app/

## Authors

- [@ Vengat p](https://github.com/Vengat-P)

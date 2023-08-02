# React + Vite

1. We create the first component of the App component
   a)return the jsx which is very look like the html
   b)we make await fetch call the api and then put the json into the variable
   c)then we make the button onclick so that we the data in the console
   d)now we make the data in the so we use the react State
   e) we use the useState function to display the data
   f) first is vlue of state,i.e, advice and second is setAdvice which is the function to update the piece of data
   g)<h1>{advice}</h1>
   h) when the function onclick={getAdvice} it executes the function and then the data is aschieve i
   i) we now make const [count,setCount]=useState(0); for to count the number of times user got the advices and we can use any variable use for this
   j)but we first click button then the data is display
   k)now we make the useEffect to change the ui
   l)useEffect get the two arguments first is function component first get loaded and second argument dependency array
   m)strict mode in development
   n)props is like a parameter to a fuction we message compoent and the data through props into another component
   o) the dependency array effects by default effects run after the every render W can prevent that by passing a dependency array
   p) without the dependenxy arra , react doesnt know when to run the efeect
   q)each time of the dependency changes the effect will be executed again
   r)
   const title=props.movie.Title;
   const [userRating, setUserRating] =useState('')
   useEffect(
   function(){
   if(!title) return ;
   document.title=`${title} ${
             userRating &&  `(Rated $ {userRating} starsign)`
         }`;
   return () => (document.title='usePopcorn');
   },
   [title,userRating]
   ) ;

   s)useEffect uses the props - title and state userRating
   t)so both of them included in the dependency array [title,userRating]
   u)we need to tell react not know to react re effect the use code sale closures
   v)otherwise we got the 'stale closures'
   w)side effect is a synchronous mechaninsm The mechanism of effects Every state and props used inside the effect must be included in the dependency array
   x) useEffect is like an event listner that is listening for one dpendency to change whenever a dependency changes it will execute the effect gain
   y) We can use the dependency array to run effects whent he compinent renders or re - renders
   z) Effects and compoentns lifecycles are deeply connnected

2. More about hooks effects
   a)useEffects hooks are synchronous and about the component lifecycles
   b)useEffect(fn) every state and props are dependencies of the effect
   c)When are effects executed
   d)Declarative compoentns based state driven js library
   e)compoentns are the building blocks of ui in react
   f)a declarative syntax is jsx
   g)should look like based on current data/state
   h)React is abstraction away from DOM we never touch the DOM
   i)JSX- a syntax combines the HTml, css and js
   main
    <h1 style={fontsize:''}>
    <a href=''></a>
    <p style={fontSize:''}>{numListings}</p>

   as well as refereninf the other compoennt

   j) state helps to never touch the react to touch DOM
   k)keep the ui syc data React reacts to state changes by re rendering the ui
   l)Rendering component on a webpage (UI) based on teir current state
   m)Keeping the UI in synv with state by re - rendering (reacting when state chages)
   o)

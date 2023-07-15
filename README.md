### Phase 1
* I have declared 2 state variables. One of them is 'url' to take control of the value of the input field where user will put there long url. The other is 'shortenedUrls' that will display the shortened url on the screen after user submitted the long url.
* Then I have written the 'shortenUrl' asynchronous function it will receive an event object and with the help of this I will prevent browsers default refreshing of page when the form is submitted. This function will be called when user will submit the long url.
* Inside this function I will use try/catch chaining to fetch data from 'shrtco' API which in my case receive the long url and send me back the short url. When we use this url it will redirect us to the original site with long link.
* I will use 'setShortenedUrls' the setter function to set the current value of 'shortenedUrls' value. If the shortenedUrls value becomes true then I will render it out with the help of JSX element.

### Phase 2
* After my url shortening working properly I have created 3 pages the 'EntryPage', 'EditPage' and 'ListPage'. I have used React Router to create 3 routes, also create a Header component to navigate through the routes.
* I kept my 2 states and the function for shortening function of the App component so that I can pass the necessary props to the child components. 

### Phase 3
* I have started working on the EntryPage, I have send the necessary props from the App component to the EntryPage component. Make sure the app is working properly like before.

### Phase 4
* Then I have started working on the ListPage component where I need to show all the shortened urls like a list. The problem I was facing this time was when I try to add a new shortened url it replaces the previous url.
* I have changed the the default value of 'shortenedUrls' piece of state to an empty array instead of an empty string.
* Inside of the function that I use fetch data I set 'setShortenedUrls' an array where I spread the shortenedUrls then add the new data that is fetched. This way now I am getting a list of shortened urls in my ListPage.

### Phase 5
* In order to store the shortened urls to my local storage I have used useEffect hook and inside the 1st argument the arrow function I used setItem method to the shortened urls. I have used the second argument of the useEffect function to call the 1st argument arrow function to store the shortened urls whenever the state of shortenedUrl changes.
* In order to fetch the all the shortened urls that is previously stored in my local storage I used another useEffect hook in which the 1st argument is the arrow function inside I fetch all the urls using getItem method and write the 2nd argument as an empty array so the 1st argument arrow function will be called only time the browser first renders.

### Phase 6
* In the EditPage in order to delete a shortened url I have written handleDelete function which will receive the index as an argument to delete the particular shortened url, first I have created a new copy of shortenedUrls array, then I have used spliced method the delete that particular shortened url from that array of shortened urls.
* I have created the handleEdit function in this I have also created a new copy of the shortenedUrls array, and in that new array whichever url the used edited I have set it to replace it to the new url.

### Phase 7
* I have used Ant Design which is a React UI Library to do styling for my project.

### Phase 8
* I could not use the storybooks and typescript.
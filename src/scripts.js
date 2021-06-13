
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/index.scss';
import fetchcalls from './fetch-calls';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/axe.png'

let user, booking, guest 

function onLoad() {
  fetchcalls.fetchAllData()
    .then((promise) => {
    const allGuests = createGuestInstances(promise[0])
    
    }) 
}

const createGuestInstances = (fetchGuestData) => {
    
}
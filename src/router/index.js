import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SuperAdmin from "../views/SuperAdmin4.vue";
import Admin from '../views/Admin/Admin.vue';
import Office from '../views/Admin/Office.vue';
import Offer from '../views/Admin/Offer.vue';
import Employe from '../views/Admin/Employe.vue';
import Trip from '../views/Manager/Manager.vue';
import Transport from '../views/Manager/Transport.vue';
import OfficeEmployee from '../views/Manager/OfficeEmployee.vue';
import Reservation from '../views/Employee/Reservation.vue';
import OneTrip from '../views/Employee/OneTrip.vue';
import UnConfirmed from '../views/Employee/UnConfirmed.vue';
import OneTripUnConfirmd from '../views/Employee/OneTripUnConfirmd.vue';
import Confirmed from "../views/Employee/Confirmed.vue";
import OneTripConfirmd from "../views/Employee/OneTripConfirmed.vue";
import CanceledReservations from "../views/Employee/CanceledReservations.vue";
 import test from "../views/test.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/SuperAdmin",
    name: "SuperAdmin",
    component: SuperAdmin,
    beforeEnter(to, from, next) {
			window.scroll(0,0);
			// check vuex store //
			if (localStorage.getItem('role') == "5") {
			  next()
			} else {
			  next({
				name: "home" // back to safety route //
			  });
			}
		  }
  }, 
  {
    path: "/Admin",
    name: "Admin",
    component: Admin,
    beforeEnter(to, from, next) {
			window.scroll(0,0);
			// check vuex store //
			if (localStorage.getItem('role') == "4") {
			  next()
			} else {
			  next({
				name: "home" // back to safety route //
			  });
			}
		  }
  }, 
  {
    path: "/Office",
    name: "Office",
    component: Office,
    beforeEnter(to, from, next) {
			window.scroll(0,0);
			// check vuex store //
			if (localStorage.getItem('role') == "4") {
			  next()
			} else {
			  next({
				name: "home" // back to safety route //
			  });
			}
		  }
  },
  {
    path: "/Offer",
    name: "Offer",
    component: Offer,
    beforeEnter(to, from, next) {
			window.scroll(0,0);
			// check vuex store //
			if (localStorage.getItem('role') == "4") {
			  next()
			} else {
			  next({
				name: "home" // back to safety route //
			  });
			}
		  }
  },  
  {
    path: "/Employe",
    name: "Employe",
    component: Employe,
    beforeEnter(to, from, next) {
			window.scroll(0,0);
			// check vuex store //
			if (localStorage.getItem('role') == "4") {
			  next()
			} else {
			  next({
				name: "home" // back to safety route //
			  });
			}
		  }
  } ,  
  {
    path: "/Trip",
    name: "Trip",
    component: Trip,
    beforeEnter(to, from, next) {
			window.scroll(0,0);
			// check vuex store //
			if (localStorage.getItem('role') == "3") {
			  next()
			} else {
			  next({
				name: "home" // back to safety route //
			  });
			}
		  }
  },  
  {
    path: "/Transport",
    name: "Transport",
    component: Transport,
    beforeEnter(to, from, next) {
			window.scroll(0,0);
			// check vuex store //
			if (localStorage.getItem('role') == "3") {
			  next()
			} else {
			  next({
				name: "home" // back to safety route //
			  });
			}
		  }
  },  
  {
    path: "/OfficeEmployee",
    name: "OfficeEmployee",
    component: OfficeEmployee,
    beforeEnter(to, from, next) {
			window.scroll(0,0);
			// check vuex store //
			if (localStorage.getItem('role') == "3") {
			  next()
			} else {
			  next({
				name: "home" // back to safety route //
			  });
			}
		  }
  },  
  {
    path: "/Reservation",
    name: "Reservation",
    component: Reservation,
    beforeEnter(to, from, next) {
			window.scroll(0,0);
			// check vuex store //
			if (localStorage.getItem('role') == "2") {
			  next()
			} else {
			  next({
				name: "home" // back to safety route //
			  });
			}
		  }
  },
  {
    path: "/OneTrip/",
    name: "OneTrip",
    component: OneTrip,
    beforeEnter(to, from, next) {
			window.scroll(0,0);
			// check vuex store //
			if (localStorage.getItem('role') == "2") {
			  next()
			} else {
			  next({
				name: "home" // back to safety route //
			  });
			}
		  }
  },  
  {
    path: "/UnConfirmed",
    name: "UnConfirmed",
    component: UnConfirmed,
    beforeEnter(to, from, next) {
			window.scroll(0,0);
			// check vuex store //
			if (localStorage.getItem('role') == "2") {
			  next()
			} else {
			  next({
				name: "home" // back to safety route //
			  });
			}
		  }
  },   
  {
    path: "/OneTripUnConfirmd/",
    name: "OneTripUnConfirmd",
    component: OneTripUnConfirmd,
    beforeEnter(to, from, next) {
			window.scroll(0,0);
			// check vuex store //
			if (localStorage.getItem('role') == "2") {
			  next()
			} else {
			  next({
				name: "home" // back to safety route //
			  });
			}
		  }
  }, 
  {
    path: "/Confirmed",
    name: "Confirmed",
    component: Confirmed,
    beforeEnter(to, from, next) {
			window.scroll(0,0);
			// check vuex store //
			if (localStorage.getItem('role') == "2") {
			  next()
			} else {
			  next({
				name: "home" // back to safety route //
			  });
			}
		  }
  },  
  {
    path: "/OneTripConfirmd/",
    name: "OneTripConfirmd",
    component: OneTripConfirmd,
    beforeEnter(to, from, next) {
			window.scroll(0,0);
			// check vuex store //
			if (localStorage.getItem('role') == "2") {
			  next()
			} else {
			  next({
				name: "home" // back to safety route //
			  });
			}
		  }
  },    
  {
    path: "/CanceledReservations",
    name: "CanceledReservations",
    component: CanceledReservations,
    beforeEnter(to, from, next) {
			window.scroll(0,0);
			// check vuex store //
			if (localStorage.getItem('role') == "2") {
			  next()
			} else {
			  next({
				name: "home" // back to safety route //
			  });
			}
		  }
  },
  {
    path: "/test",
    name: "test",
    component: test,
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

<template>
  <div>
    <nav
      class="main_menu12 pt-2 "
      :class="$i18n.locale == 'ar' ? 'ar_style' : ''"
    >
      <ul>
        <li  v-if="`${$i18n.locale}` == 'en'">
          <img src="@/assets/logoSide1.png" alt="logoSide1" style="    width: 76%;
    margin: 10px 10px 25px 10px;">
        </li>
        <li  v-if="`${$i18n.locale}` == 'ar'">
          <img src="@/assets/logoSide2.png" alt="logoSide1" style="    width: 76%;
    margin: 10px 10px 25px 10px;">
        </li>
        <li v-if="page1" 
        :class="activeNumber == 1? 'active' :'' "
        >
          <a class="link">
            <img class="fa" src="../../assets/Sidepar/house.svg" alt="house" />
            
            <span class="nav-text F2_20">
              {{ $t("Header.Company") }}
            </span>
          </a>
        </li>
        <li @click="AddManager" v-if="page1" class="mt-2">
          <div class="link">
            <img class="fa" src="../../assets/Sidepar/user.svg" alt="user" />
            <span class="nav-text F2_20">
              {{ $t("Header.AddManager") }}
            </span>
          </div>
        </li>
        <li v-if="page2" 
        :class="activeNumber == 3? 'active' :'' "
        >
          <router-link class="link" to="/Admin">
            <img class="fa" src="../../assets/Sidepar/house.svg" alt="house" />
        
            <span class="nav-text F2_20">
              {{ $t("Header.Home") }}
            </span>
          </router-link>
        </li>
        <li v-if="page2"
        :class="activeNumber == 4? 'active' :'' "
        
        >
          <router-link class="link" to="/Office">
            <img class="fa" src="../../assets/Sidepar/building.svg" alt="house" />
         
            <span class="nav-text F2_20">
              {{ $t("Header.Office") }}
            </span>
          </router-link >
        </li>
        <li v-if="page2"
        :class="activeNumber == 5 ? 'active' :'' "
        
        >
          <router-link class="link" to="/Offer">
            <img class="fa" src="../../assets/Sidepar/offer.svg" alt="offer" />
          
            <span class="nav-text F2_20">
              {{ $t("Header.Offer") }}
            </span>
          </router-link>
        </li>
        <li v-if="page2" 
        :class="activeNumber == 6 ? 'active' :'' "
        
        >
          <router-link class="link" to="/Employe">
            <img class="fa" src="../../assets/Sidepar/user.svg" alt="user" />
          
            <span class="nav-text F2_20">
              {{ $t("Header.Employe") }}
            </span>
          </router-link>
        </li>
        <li @click="ChangePassword" v-if="page2" class="mt-2">
          <div class="link">
            <img class="fa" src="../../assets/Sidepar/change1.svg" alt="ChangePassword" />
            <span class="nav-text F2_20">
              {{ $t("Header.changePassword") }}
            </span>
          </div>
        </li>
        <li v-if="page3" 
      
        :class="activeNumber == 7 ? 'active' :'' "
        
        >
          <router-link class="link" to="/Trip">
            <img class="fa" src="../../assets/Sidepar/airplane.svg" alt="airplane" />
          
            <span class="nav-text F2_20">
              {{ $t("Trip.Trip") }}
            </span>
          </router-link>
        </li>
        <li v-if="page3" 
        :class="activeNumber == 8 ? 'active' :'' "
        >
          <router-link class="link" to="/Transport">
            <img class="fa" src="../../assets/Sidepar/bus.svg" alt="airplane" />
          
            <span class="nav-text F2_20">
              {{ $t("Header.Transport") }}
            </span>
          </router-link>
        </li>
        <li v-if="page3" 
        :class="activeNumber == 9 ? 'active' :'' "
        
         > 
          <router-link class="link" to="/OfficeEmployee">
            <img class="fa" src="../../assets/Sidepar/user.svg" alt="airplane" />
          
            <span class="nav-text F2_20">
              {{ $t("Header.Employe") }}
            </span>
          </router-link>
        </li>
        <li v-if="page4" 
        :class="activeNumber == 10 ? 'active' :'' "
        
        >
          <router-link class="link" to="/Reservation">
            <img class="fa" src="../../assets/Sidepar/airplane.svg" alt="airplane" />
          
            <span class="nav-text F2_20">
              {{ $t("Trip.Trip") }}
            </span>
          </router-link>
        </li>
        <li v-if="page4" 
        :class="activeNumber == 11 ? 'active' :'' "
        
         >
          <router-link class="link" to="/UnConfirmed">
            <img class="fa" src="../../assets/Admin/close.svg" alt="airplane" />
          
            <span class="nav-text F2_20">
              {{ $t("Header.UnConfirmed") }}
            </span>
          </router-link>
        </li>
        <li v-if="page4"
        :class="activeNumber == 12 ? 'active' :'' "
        
          >
          <router-link class="link" to="/Confirmed">
            <img class="fa" src="../../assets/Sidepar/ok.svg" alt="airplane" />
          
            <span class="nav-text F2_20">
              {{ $t("Header.Confirmed") }}
            </span>
          </router-link>
        </li>
        <li v-if="page4"
        :class="activeNumber == 13 ? 'active' :'' "
        
          >
          <router-link class="link" to="/CanceledReservations">
            <img class="fa" src="../../assets/Sidepar/cancel1.svg" alt="cancel" />
          
            <span class="nav-text F2_20">
              {{ $t("Header.CanceledReservations") }}
            </span>
          </router-link>
        </li>
      </ul>

      <ul class="logout ">
        <li>
          <div class="link" style="cursor: pointer;">
            <img
              class="fa"
              src="../../assets/Sidepar/language-solid.svg"
              alt="language"
            />

            <select class="Select F2_20" name="" id="" v-model="lang" @change="callLang" required style="cursor: pointer;">
              <option value="" disabled>{{ $t("Header.language") }}</option>
              <option value="ar">{{ $t("Header.Aribc") }}</option>
              <option value="en">{{ $t("Header.English") }}</option>
            </select>
          </div>
        </li>
        <li>
          <div class="link" @click="LogOut" style="cursor: pointer;">
            <img
              class="fa"
              src="../../assets/Sidepar/poweroff.svg"
              alt="poweroff"
            />

            <span class="nav-text F2_20">
              {{ $t("Header.Logout") }}
            </span>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["page1", 'page2' , 'page3' ,'page4' ,'activeNumber'],
  data() {
    return {
      lang: "",
    };
  },
  methods: {
    AddManager() {
      this.$emit("AddManager");
    },
    ChangePassword() {
  this.$emit("ChangePassword")
    },
    LogOut() {
      localStorage.setItem("token", null);
      localStorage.setItem("role", null);
      localStorage.setItem("Email", null);
      this.$router.push({
        name: "home",
      });
    },
    callLang() {
      console.log("iam here" + this.lang);
      if (this.$i18n.locale == this.lang) {
        return;
      }

      this.$i18n.locale = this.lang;
      localStorage.setItem("language", this.lang);
      /*this.$router.go(this.$router.currentRoute);*/
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);
@import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);

.active {
  background-color: cadetblue;
}
.Select {
  width: auto;
    color: black;
    background-color: #fff;
    // background-color: rgba(0, 38, 77, 0.1);
    border: 0px;
    height: 28px;
    border-radius: 6px;
}
 
.fa {
  position: relative;
  display: table-cell;
  width: 40px;
  height: 30px;
  text-align: center;
  vertical-align: middle;
  font-size: 20px;
  padding-bottom: 10px;
  display: inline-block;
}
.main_menu12 {
  //background: $Sex;
 // background-color: #fffefe71;
  background-color: #fffefe;

  // border-right: 1px solid #e5e5e5;
  position: fixed !important;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 210px;
  overflow: hidden;
  -webkit-transition: width 0.05s linear;
  transition: width 0.05s linear;
  -webkit-transform: translateZ(0) scale(1, 1);
  z-index: 1000;
}
.ar_style {
  right: 0 !important;
}
@media only screen and (max-width: 700px) {
  .main_menu12 {
    width: 50px;
    overflow: hidden;
  }
  .main_menu12:hover,
  nav.main_menu12.expanded {
    width: 219px;
    overflow: visible;
  }
}
.main_menu12 > ul {
  margin: 7px 0;
}

.main_menu12 li {
  position: relative;
  display: block;
  width: 220px;
  padding: 5px 0px 0px 0px;
  cursor: pointer;

}

.main_menu12 li > .link {
  position: relative;
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
 // color: #e4e1e1;
 color: black;
 font-family: arial;
  font-size: 14px;
  text-decoration: none;
  -webkit-transform: translateZ(0) scale(1, 1);
  -webkit-transition: all 0.1s linear;
  transition: all 0.1s linear;
  width: 100%;
}

.main_menu12.nav-icon {
  position: relative;
  display: table-cell;
  width: 60px;
  height: 36px;
  text-align: center;
  vertical-align: middle;
  font-size: 18px;
}

.main_menu12.nav-text {
  position: relative;
  display: table-cell;
  vertical-align: middle;
  width: 190px;
  font-family: "Titillium Web", sans-serif;
}

.main_menu12 > ul.logout {
  position: absolute;
 // left: 0;
  bottom: 0;
}

.no-touch .scrollable.hover {
  overflow-y: hidden;
}

.no-touch .scrollable.hover:hover {
  overflow-y: auto;
  overflow: visible;
}

.link:hover,
.link:focus {
  text-decoration: none;
}

nav {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

nav ul,
nav li {
  outline: 0;
  margin: 0;
  padding: 0;
}
 
/**.active
 .area {
float: left;
background: #e2e2e2;
width: 100%;
height: 100%;
}
.main_menu12 li:hover > .link,
nav.main_menu12 li.active > .link,
.dropdown-menu > li > .link:hover,
.dropdown-menu > li > .link:focus,
.dropdown-menu > .active > .link,
.dropdown-menu > .active > .link:hover,
.dropdown-menu > .active > .link:focus,
.no-touch .dashboard-page nav.dashboard-menu ul li:hover .link,
.dashboard-page nav.dashboard-menu ul li.active .link {
  color: #fff;
  background-color: #575757;
  width: 87%;
}

    background-color: cadetblue;
 */
 
</style>

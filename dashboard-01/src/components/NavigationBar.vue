<!-- <script setup>
import NavigationElement from "./NavigationElement.vue";

//icons:
import {
  IconSmartHome, //IconSmartHome
  IconShoppingCart, //IconShoppingCart
  IconSchool, //IconSchool
  IconCar, //IconCar
  IconUser, //IconUser
  IconMail, //IconMail
  IconMessageCircle, //IconMessageCircle
  IconCalendar, //IconCalendar
  IconCopy, //IconCopy
  IconFileInvoice, //IconFileInvoice
  IconLock, //IconLock
  IconFile, //IconFile
  IconShieldLock, //IconShieldLock
  IconDots, //IconDots
  IconSquare, //IconSquare
  IconChevronRight,
} from "@tabler/icons-vue";

const navs = [
  {
    name: "Dashboard",
    icon: IconSmartHome,
    link: "/dashboard",
    type: "group",
    notifications: 5,
  },
  {
    name: "APPS & PAGES",
    type: "section",
    icon: "",
    link: "/applications",
    children: [
      {
        name: "eCommerce",
        icon: IconShoppingCart,
        link: "/applications/eCommerce",
      },
      {
        name: "Academy",
        icon: IconSchool,
        link: "/applications/Academy",
      },
      {
        name: "Logistics",
        icon: IconCar,
        link: "/applications/Logistics",
      },
      {
        name: "Users",
        type: "group",
        icon: IconUser,
        link: "/applications/Users",
        children: [
          {
            name: "List",
            icon: "",
            link: "/applications/Users/List",
          },
          {
            name: "View",
            type: "group",
            icon: "",
            link: "/applications/Users/View",
            children: [
              {
                name: "Overview",
                icon: "",
                link: "/applications/Users/View/Overview",
              },
              {
                name: "Security",
                icon: "",
                link: "/applications/Users/View/Security",
              },
              {
                name: "Billing & Plans",
                icon: "",
                link: "/applications/Users/View/Billing&Plans",
              },
              {
                name: "Notifications",
                icon: "",
                link: "/applications/Users/View/Notifications",
              },
              {
                name: "Connection",
                icon: "",
                link: "/applications/Users/View/Connection",
              },
            ],
          },
        ],
      },
      {
        name: "Email",
        icon: IconMail,
        link: "/applications/Email",
      },
      {
        name: "Chat",
        icon: IconMessageCircle,
        link: "/applications/Chat",
      },
      {
        name: "Calendar",
        icon: IconCalendar,
        link: "/applications/Calendar",
      },
      {
        name: "Kanban",
        icon: IconCopy,
        link: "/applications/Kanban",
      },
      {
        name: "Invoice",
        type: "group",
        icon: IconFileInvoice,
        link: "/applications/Invoice",
      },
      {
        name: "Roles & Permiss",
        type: "group",
        icon: IconLock,
        link: "/applications/Roles&Permiss",
      },
    ],
  },
  {
    name: "PAGES",
    type: "section",
    icon: "",
    link: "/PAGES",
    children: [
      {
        name: "Pages",
        type: "group",
        icon: IconFile,
        link: "/PAGES/Pages",
      },
      {
        name: "Authentications",
        type: "group",
        icon: IconShieldLock,
        link: "/PAGES/Authentications",
      },
      {
        name: "Wizard Examples",
        type: "group",
        icon: IconDots,
        link: "/PAGES/WizardExamples",
      },
      {
        name: "Dialog Examples",
        type: "group",
        icon: IconSquare,
        link: "/PAGES/DialogExamples",
      },
    ],
  },
];
</script>

<template>
  <div class="my-1 mx-3">
    <ul>
      <NavigationElement v-for="nav in navs" :key="nav.name" :nav="nav" />
    </ul>
  </div>
</template> -->

<script setup>
import { ref } from "vue";
import NavigationElement from "./NavigationElement.vue";

import {
  IconSmartHome, //IconSmartHome
  IconShoppingCart, //IconShoppingCart
  IconSchool, //IconSchool
  IconCar, //IconCar
  IconUser, //IconUser
  IconMail, //IconMail
  IconMessageCircle, //IconMessageCircle
  IconCalendar, //IconCalendar
  IconCopy, //IconCopy
  IconFileInvoice, //IconFileInvoice
  IconLock, //IconLock
  IconFile, //IconFile
  IconShieldLock, //IconShieldLock
  IconDots, //IconDots
  IconSquare, //IconSquare
  IconChevronRight,
} from "@tabler/icons-vue";

const expandedLink = ref("");

function toggleChildren(link) {
  expandedLink.value = expandedLink.value === link ? "" : link;
}
const navs = [
  {
    name: "Dashboard",
    icon: IconSmartHome,
    link: "/dashboard",
    type: "group",
    notifications: 5,
  },
  {
    name: "APPS & PAGES",
    type: "section",
    icon: "",
    link: "/applications",
    children: [
      {
        name: "eCommerce",
        icon: IconShoppingCart,
        link: "/applications/eCommerce",
      },
      {
        name: "Academy",
        icon: IconSchool,
        link: "/applications/Academy",
      },
      {
        name: "Logistics",
        icon: IconCar,
        link: "/applications/Logistics",
      },
      {
        name: "Users",
        type: "group",
        icon: IconUser,
        link: "/applications/Users",
        children: [
          {
            name: "List",
            icon: "",
            link: "/applications/Users/List",
          },
          {
            name: "View",
            type: "group",
            icon: "",
            link: "/applications/Users/View",
            children: [
              {
                name: "Overview",
                icon: "",
                link: "/applications/Users/View/Overview",
              },
              {
                name: "Security",
                icon: "",
                link: "/applications/Users/View/Security",
              },
              {
                name: "Billing & Plans",
                icon: "",
                link: "/applications/Users/View/Billing&Plans",
              },
              {
                name: "Notifications",
                icon: "",
                link: "/applications/Users/View/Notifications",
              },
              {
                name: "Connection",
                icon: "",
                link: "/applications/Users/View/Connection",
              },
            ],
          },
        ],
      },
      {
        name: "Email",
        icon: IconMail,
        link: "/applications/Email",
      },
      {
        name: "Chat",
        icon: IconMessageCircle,
        link: "/applications/Chat",
      },
      {
        name: "Calendar",
        icon: IconCalendar,
        link: "/applications/Calendar",
      },
      {
        name: "Kanban",
        icon: IconCopy,
        link: "/applications/Kanban",
      },
      {
        name: "Invoice",
        type: "group",
        icon: IconFileInvoice,
        link: "/applications/Invoice",
      },
      {
        name: "Roles & Permiss",
        type: "group",
        icon: IconLock,
        link: "/applications/Roles&Permiss",
      },
    ],
  },
  {
    name: "PAGES",
    type: "section",
    icon: "",
    link: "/PAGES",
    children: [
      {
        name: "Pages",
        type: "group",
        icon: IconFile,
        link: "/PAGES/Pages",
      },
      {
        name: "Authentications",
        type: "group",
        icon: IconShieldLock,
        link: "/PAGES/Authentications",
      },
      {
        name: "Wizard Examples",
        type: "group",
        icon: IconDots,
        link: "/PAGES/WizardExamples",
      },
      {
        name: "Dialog Examples",
        type: "group",
        icon: IconSquare,
        link: "/PAGES/DialogExamples",
      },
    ],
  },
];
</script>

<template>
  <ul>
    <NavigationElement
      v-for="nav in navs"
      :nav="nav"
      :expandedLink="expandedLink"
      @toggle-children="toggleChildren"
    />
  </ul>
</template>

<!-- <script setup>
import NavigationElement from "./NavigationElement.vue";
import { ref } from "vue";

//icons:
import {
  IconSmartHome, //IconSmartHome
  IconShoppingCart, //IconShoppingCart
  IconSchool, //IconSchool
  IconCar, //IconCar
  IconUser, //IconUser
  IconMail, //IconMail
  IconMessageCircle, //IconMessageCircle
  IconCalendar, //IconCalendar
  IconCopy, //IconCopy
  IconFileInvoice, //IconFileInvoice
  IconLock, //IconLock
  IconFile, //IconFile
  IconShieldLock, //IconShieldLock
  IconDots, //IconDots
  IconSquare, //IconSquare
  IconChevronRight,
} from "@tabler/icons-vue";

const navs = [
  {
    name: "Dashboard",
    icon: IconSmartHome,
    link: "/dashboard",
    type: "group",
    notifications: 5,
  },
  {
    name: "APPS & PAGES",
    type: "section",
    icon: "",
    link: "/applications",
    children: [
      {
        name: "eCommerce",
        icon: IconShoppingCart,
        link: "/eCommerce",
      },
      {
        name: "Academy",
        icon: IconSchool,
        link: "/Academy",
      },
      {
        name: "Logistics",
        icon: IconCar,
        link: "/Logistics",
      },
      {
        name: "Users",
        type: "group",
        icon: IconUser,
        link: "/Users",
        children: [
          {
            name: "List",
            icon: "",
            link: "/List",
          },
          {
            name: "View",
            type: "group",
            icon: "",
            link: "/View",
            children: [
              {
                name: "Overview",
                icon: "",
                link: "/Overview",
              },
              {
                name: "Security",
                icon: "",
                link: "/Security",
              },
              {
                name: "Billing & Plans",
                icon: "",
                link: "/Billing&Plans",
              },
              {
                name: "Notifications",
                icon: "",
                link: "/Notifications",
              },
              {
                name: "Connection",
                icon: "",
                link: "/Connection",
              },
            ],
          },
        ],
      },
      {
        name: "Email",
        icon: IconMail,
        link: "/Email",
      },
      {
        name: "Chat",
        icon: IconMessageCircle,
        link: "/Chat",
      },
      {
        name: "Calendar",
        icon: IconCalendar,
        link: "/Calendar",
      },
      {
        name: "Kanban",
        icon: IconCopy,
        link: "/Kanban",
      },
      {
        name: "Invoice",
        type: "group",
        icon: IconFileInvoice,
        link: "/Invoice",
      },
      {
        name: "Roles & Permiss",
        type: "group",
        icon: IconLock,
        link: "/Roles&Permiss",
      },
    ],
  },
  {
    name: "PAGES",
    type: "section",
    icon: "",
    link: "/PAGES",
    children: [
      {
        name: "Pages",
        type: "group",
        icon: IconFile,
        link: "/Pages",
      },
      {
        name: "Authentications",
        type: "group",
        icon: IconShieldLock,
        link: "/Authentications",
      },
      {
        name: "Wizard Examples",
        type: "group",
        icon: IconDots,
        link: "/WizardExamples",
      },
      {
        name: "Dialog Examples",
        type: "group",
        icon: IconSquare,
        link: "/DialogExamples",
      },
    ],
  },
];

const previousKey = ref();
const childKey = ref(null);

function toggleClick(key, ckey = false) {
  if (previousKey.value === key) {
    previousKey.value = null;
  } else {
    previousKey.value = key;
    if (cKey) {
      childKey.value = true;
    } else {
      childKey.value = false;
    }
  }
  console.log(previousKey.value);
}
</script>

<template>
  <div class="my-1 mx-3">
    <ul>
      <NavigationElement
        v-for="nav in navs"
        :key="nav.name"
        :nav="nav"
        :previousKey="previousKey"
        @toggle-click="toggleClick"
      />
    </ul>
  </div>
</template> -->

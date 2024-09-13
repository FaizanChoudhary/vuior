import { lazy } from "react";
import Loadable from "./shared/Loadable"; // Assuming you place Loadable in a `shared` folder
// import AuthGuard from "./components/AuthGuard"; // Assuming you have an AuthGuard component

// Lazy load components
const MainLayout = Loadable(lazy(() => import("./layouts/MainLayout")));
const Home = Loadable(lazy(() => import("./pages/HomePage.js")));
const ProgramPage = Loadable(lazy(() => import("./pages/ProgramPage.js")));
const MembershipPage = Loadable(
  lazy(() => import("./pages/MembershipPage.js"))
);
const CareerPage = Loadable(lazy(() => import("./pages/CareerPage.js")));
const AboutUsPage = Loadable(lazy(() => import("./pages/AboutUsPage.js")));
const ContactUsPage = Loadable(lazy(() => import("./pages/ContactUsPage.js")));
// const LoanPrograms = Loadable(lazy(() => import("./shared/Loadable.js")));
// const HouseholdBillConsolidation = Loadable(
//   lazy(() => import("./pages/HouseholdBillConsolidation.js"))
// );
// const PrivacyPolicy = Loadable(lazy(() => import("./pages/PrivacyPolicy")));
// const TermsOfService = Loadable(lazy(() => import("./pages/TermsOfService")));
// const CookiePolicy = Loadable(lazy(() => import("./pages/CookiePolicy")));
// const DataProtectionPolicy = Loadable(
//   lazy(() => import("./pages/DataProtectionPolicy"))
// );
const ErrorPage = Loadable(lazy(() => import("./pages/ErrorPage"))); // 404 page

// Routes
const routes = [
  {
    element: <MainLayout />, // This is the main layout that wraps your pages
    children: [
      { path: "/", element: <Home /> },
      { path: "/programs", element: <ProgramPage /> },
      { path: "/membership", element: <MembershipPage /> },
      { path: "/careers", element: <CareerPage /> },
      { path: "/about-us", element: <AboutUsPage /> },
      { path: "/contact-us", element: <ContactUsPage /> },
      // { path: "/loan-programs", element: <LoanPrograms /> },
      // {
      //   path: "/household-bill-consolidation",
      //   element: <HouseholdBillConsolidation />,
      // },

      //   { path: "/privacy-policy", element: <PrivacyPolicy /> },
      //   { path: "/terms-of-service", element: <TermsOfService /> },
      //   { path: "/cookie-policy", element: <CookiePolicy /> },
      //   {
      //     path: "/data-protection-policy",
      //     element: <DataProtectionPolicy />,
      //   },
    ],
  },
  { path: "*", element: <ErrorPage /> }, // Fallback for undefined routes
];

export default routes;

import AdScrapPage from "pages/mykiikey/AdScrap";
import AdWatchPage from "pages/mykiikey/AdWatch";
import EventApplyPage from "pages/mykiikey/EventApply";
import FavoriteStorePage from "pages/mykiikey/FavoriteStore";
import NoticePage from "pages/mykiikey/Notice";
import OrderDetailPage from "pages/mykiikey/OrderDetail";
import OrderHistoryPage from "pages/mykiikey/OrderHistory";
import PointHistoryPage from "pages/mykiikey/PointHistory";
import PositioningPage from "pages/mykiikey/Positioning";
import PrivacyPage from "pages/mykiikey/Privacy";
import ReviewHistoryPage from "pages/mykiikey/ReviewHistory";
import ReviewWritePage from "pages/mykiikey/ReviewWrite";
import ServiceCenterPage from "pages/mykiikey/ServiceCenter";
import { Navigate, Route, Routes } from "react-router-dom";

const MykiikeyRoutes = () => {
  console.log("Mykiikey");
  return (
    <section>
      <Routes>
        <Route path="" element={<Navigate to={"adwatche"} />} />
        <Route path="adwatche" element={<AdWatchPage />} />
        <Route path="adscrap" element={<AdScrapPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="orderList" element={<OrderHistoryPage />} />
        <Route path="orderList/:odIdx" element={<OrderDetailPage />} />
        <Route path="reviewHistory" element={<ReviewHistoryPage />} />
        <Route path="review/write" element={<ReviewWritePage />} />
        <Route path="eventApply" element={<EventApplyPage />} />
        <Route path="favoritestore" element={<FavoriteStorePage />} />
        <Route path="servicecenter" element={<ServiceCenterPage />} />
        <Route path="pointuseHistory" element={<PointHistoryPage />} />
        <Route path="notice" element={<NoticePage />} />
        <Route path="positioning" element={<PositioningPage />} />
      </Routes>
    </section>
  );
};

export default MykiikeyRoutes;

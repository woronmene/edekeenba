/* eslint-disable react-hooks/exhaustive-deps */
// import logo from './logo.svg';
import "./App.css";
import Lottie from "react-lottie";
import animationData from "./tag.json";
import { useState, useEffect } from "react";
import Tooltip from "./components/Tooltip/Tooltip";
// import newLabels from "./lebron_500.json";
import PlayerCard from "./components/PlayerCard/PlayerCard";
// import { tab } from "@testing-library/user-event/dist/tab";
import ProductCard from "./components/ProductCard/ProductCard";
import BidCard from "./components/BidCard/BidCard";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // const [xPos, setXPos] = useState(0);
  // const [yPos, setYPos] = useState(0);
  // const [num, setNum] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  const [stillRunning, setStillRunning] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [yValue, setYValue] = useState(0);
  const [xValue, setXValue] = useState(0);
  // const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const [tabContent, setTabContent] = useState(0);

  // const lebron_label = newLabels.result.labels;

  const labels = [
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 250,
      x: 0.6377551020408163,
      y: 0.33031674208144796,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 500,
      x: 0.6224489795918368,
      y: 0.3212669683257919,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 750,
      x: 0.6096938775510204,
      y: 0.3167420814479638,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 1000,
      x: 0.6071428571428571,
      y: 0.33031674208144796,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 1250,
      x: 0.6147959183673469,
      y: 0.3438914027149321,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 1500,
      x: 0.6198979591836735,
      y: 0.34841628959276016,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 1750,
      x: 0.6198979591836735,
      y: 0.35294117647058826,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 2000,
      x: 0.6198979591836735,
      y: 0.3665158371040724,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 2250,
      x: 0.6301020408163265,
      y: 0.38461538461538464,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 2500,
      x: 0.6352040816326531,
      y: 0.39819004524886875,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 2750,
      x: 0.6428571428571429,
      y: 0.4298642533936652,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 3000,
      x: 0.6275510204081632,
      y: 0.4343891402714932,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 3250,
      x: 0.6071428571428571,
      y: 0.46153846153846156,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 3750,
      x: 0.5612244897959183,
      y: 0.47058823529411764,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 4000,
      x: 0.4923469387755102,
      y: 0.502262443438914,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 4250,
      x: 0.4260204081632653,
      y: 0.5203619909502263,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 4500,
      x: 0.3469387755102041,
      y: 0.5429864253393665,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 4750,
      x: 0.33418367346938777,
      y: 0.5610859728506787,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 5000,
      x: 0.36989795918367346,
      y: 0.579185520361991,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 5250,
      x: 0.40816326530612246,
      y: 0.6063348416289592,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 5500,
      x: 0.45408163265306123,
      y: 0.5882352941176471,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 5750,
      x: 0.4846938775510204,
      y: 0.5927601809954751,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 6000,
      x: 0.4923469387755102,
      y: 0.6244343891402715,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 6250,
      x: 0.5153061224489796,
      y: 0.6199095022624435,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 6500,
      x: 0.5306122448979592,
      y: 0.6018099547511312,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 6750,
      x: 0.5408163265306123,
      y: 0.6063348416289592,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 7000,
      x: 0.5408163265306123,
      y: 0.5927601809954751,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 7250,
      x: 0.5306122448979592,
      y: 0.5882352941176471,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 7500,
      x: 0.5204081632653061,
      y: 0.5248868778280543,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 7750,
      x: 0.49744897959183676,
      y: 0.4660633484162896,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 8000,
      x: 0.4770408163265306,
      y: 0.5339366515837104,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 8250,
      x: 0.45408163265306123,
      y: 0.6515837104072398,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 8500,
      x: 0.44387755102040816,
      y: 0.6289592760180995,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 8750,
      x: 0.4872448979591837,
      y: 0.5520361990950227,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 9000,
      x: 0.5204081632653061,
      y: 0.5203619909502263,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 9250,
      x: 0.5892857142857143,
      y: 0.5248868778280543,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 9500,
      x: 0.7117346938775511,
      y: 0.5067873303167421,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 9750,
      x: 0.4846938775510204,
      y: 0.583710407239819,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 10250,
      x: 0.4489795918367347,
      y: 0.6063348416289592,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 10500,
      x: 0.45153061224489793,
      y: 0.6380090497737556,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 10750,
      x: 0.45663265306122447,
      y: 0.7149321266968326,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 11000,
      x: 0.5229591836734694,
      y: 0.7873303167420814,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 11250,
      x: 0.6045918367346939,
      y: 0.7013574660633484,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 11500,
      x: 0.6198979591836735,
      y: 0.6470588235294118,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 11750,
      x: 0.5943877551020408,
      y: 0.6561085972850679,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 12000,
      x: 0.5816326530612245,
      y: 0.7375565610859729,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 12250,
      x: 0.4489795918367347,
      y: 0.6561085972850679,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 12500,
      x: 0.5306122448979592,
      y: 0.746606334841629,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 12750,
      x: 0.4362244897959184,
      y: 0.8144796380090498,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 13000,
      x: 0.4744897959183674,
      y: 0.9095022624434389,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 13250,
      x: 0.413265306122449,
      y: 0.6877828054298643,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 13500,
      x: 0.4489795918367347,
      y: 0.8461538461538461,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 15250,
      x: 0.9158163265306123,
      y: 0.39819004524886875,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 15500,
      x: 0.8137755102040817,
      y: 0.4253393665158371,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 15750,
      x: 0.7602040816326531,
      y: 0.43891402714932126,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 16250,
      x: 0.7066326530612245,
      y: 0.43891402714932126,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 16500,
      x: 0.6556122448979592,
      y: 0.4343891402714932,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 16750,
      x: 0.6071428571428571,
      y: 0.4479638009049774,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 17000,
      x: 0.5535714285714286,
      y: 0.4479638009049774,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 17250,
      x: 0.5025510204081632,
      y: 0.4434389140271493,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 17500,
      x: 0.45153061224489793,
      y: 0.4343891402714932,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 17750,
      x: 0.4005102040816326,
      y: 0.4253393665158371,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 18000,
      x: 0.336734693877551,
      y: 0.4343891402714932,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 18250,
      x: 0.24489795918367346,
      y: 0.4298642533936652,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 18500,
      x: 0.17091836734693877,
      y: 0.4298642533936652,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 18750,
      x: 0.08163265306122448,
      y: 0.4253393665158371,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 19000,
      x: 0.07653061224489796,
      y: 0.4343891402714932,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 19250,
      x: 0.17091836734693877,
      y: 0.4343891402714932,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 19500,
      x: 0.30357142857142855,
      y: 0.42081447963800905,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 19750,
      x: 0.4387755102040816,
      y: 0.4253393665158371,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 20000,
      x: 0.5229591836734694,
      y: 0.4434389140271493,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 20250,
      x: 0.5637755102040817,
      y: 0.45701357466063347,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 20500,
      x: 0.5892857142857143,
      y: 0.4841628959276018,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 20750,
      x: 0.5892857142857143,
      y: 0.5248868778280543,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 21000,
      x: 0.5714285714285714,
      y: 0.5203619909502263,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 21250,
      x: 0.5280612244897959,
      y: 0.5294117647058824,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 21500,
      x: 0.47959183673469385,
      y: 0.47058823529411764,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 21750,
      x: 0.4362244897959184,
      y: 0.5067873303167421,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 22000,
      x: 0.36989795918367346,
      y: 0.6018099547511312,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 22250,
      x: 0.3239795918367347,
      y: 0.6334841628959276,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 22500,
      x: 0.3392857142857143,
      y: 0.579185520361991,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 22750,
      x: 0.3622448979591837,
      y: 0.5927601809954751,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 23000,
      x: 0.37755102040816324,
      y: 0.5610859728506787,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 23250,
      x: 0.39285714285714285,
      y: 0.5520361990950227,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 23500,
      x: 0.40816326530612246,
      y: 0.5520361990950227,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 23750,
      x: 0.4362244897959184,
      y: 0.5294117647058824,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 24250,
      x: 0.4642857142857143,
      y: 0.5565610859728507,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 24500,
      x: 0.5102040816326531,
      y: 0.5203619909502263,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 24750,
      x: 0.48214285714285715,
      y: 0.8506787330316742,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 25000,
      x: 0.3979591836734694,
      y: 0.8552036199095022,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 25250,
      x: 0.3979591836734694,
      y: 0.8642533936651584,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 25500,
      x: 0.42857142857142855,
      y: 0.755656108597285,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 25750,
      x: 0.37244897959183676,
      y: 0.7828054298642534,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 26000,
      x: 0.40816326530612246,
      y: 0.8009049773755657,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 26750,
      x: 0.8596938775510204,
      y: 0.9457013574660633,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 27000,
      x: 0.5943877551020408,
      y: 0.8959276018099548,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 27250,
      x: 0.5229591836734694,
      y: 0.8552036199095022,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 27500,
      x: 0.3903061224489796,
      y: 0.7420814479638009,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 27750,
      x: 0.36989795918367346,
      y: 0.7285067873303167,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 28000,
      x: 0.5255102040816326,
      y: 0.497737556561086,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 28250,
      x: 0.5969387755102041,
      y: 0.6832579185520362,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 28500,
      x: 0.5841836734693877,
      y: 0.9049773755656109,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 28750,
      x: 0.6147959183673469,
      y: 0.8823529411764706,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 29000,
      x: 0.6173469387755102,
      y: 0.7601809954751131,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 29250,
      x: 0.6530612244897959,
      y: 0.6244343891402715,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 29750,
      x: 0.6377551020408163,
      y: 0.5429864253393665,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 30000,
      x: 0.6071428571428571,
      y: 0.6018099547511312,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 30250,
      x: 0.5714285714285714,
      y: 0.6108597285067874,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 30500,
      x: 0.5229591836734694,
      y: 0.5882352941176471,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 30750,
      x: 0.46938775510204084,
      y: 0.6108597285067874,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 31000,
      x: 0.41836734693877553,
      y: 0.5746606334841629,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 31250,
      x: 0.3826530612244898,
      y: 0.5565610859728507,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 31500,
      x: 0.3826530612244898,
      y: 0.4660633484162896,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 31750,
      x: 0.375,
      y: 0.583710407239819,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 32000,
      x: 0.3852040816326531,
      y: 0.5294117647058824,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 32250,
      x: 0.4107142857142857,
      y: 0.5520361990950227,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 32500,
      x: 0.4642857142857143,
      y: 0.5339366515837104,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 32750,
      x: 0.5535714285714286,
      y: 0.5565610859728507,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 33000,
      x: 0.5178571428571429,
      y: 0.6018099547511312,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 33250,
      x: 0.5331632653061225,
      y: 0.6063348416289592,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 33500,
      x: 0.5688775510204082,
      y: 0.6108597285067874,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 33750,
      x: 0.6071428571428571,
      y: 0.5565610859728507,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 34000,
      x: 0.5892857142857143,
      y: 0.5203619909502263,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 34250,
      x: 0.5918367346938775,
      y: 0.5701357466063348,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 34500,
      x: 0.6020408163265306,
      y: 0.5927601809954751,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 34750,
      x: 0.5790816326530612,
      y: 0.6199095022624435,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 35000,
      x: 0.5331632653061225,
      y: 0.6063348416289592,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 35250,
      x: 0.5127551020408163,
      y: 0.5701357466063348,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 35500,
      x: 0.4872448979591837,
      y: 0.6018099547511312,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 36000,
      x: 0.4336734693877551,
      y: 0.6063348416289592,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 36250,
      x: 0.41581632653061223,
      y: 0.6470588235294118,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 37000,
      x: 0.46938775510204084,
      y: 0.5294117647058824,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 37250,
      x: 0.46683673469387754,
      y: 0.5701357466063348,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 37500,
      x: 0.4872448979591837,
      y: 0.6018099547511312,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 37750,
      x: 0.4872448979591837,
      y: 0.6561085972850679,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 38000,
      x: 0.4744897959183674,
      y: 0.6425339366515838,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 38250,
      x: 0.4642857142857143,
      y: 0.6742081447963801,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 38500,
      x: 0.4846938775510204,
      y: 0.6787330316742082,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 38750,
      x: 0.46938775510204084,
      y: 0.6334841628959276,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 39000,
      x: 0.45153061224489793,
      y: 0.6289592760180995,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 39250,
      x: 0.4489795918367347,
      y: 0.6923076923076923,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 39500,
      x: 0.46938775510204084,
      y: 0.6380090497737556,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 39750,
      x: 0.5076530612244898,
      y: 0.6334841628959276,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 43500,
      x: 0.4005102040816326,
      y: 0.43891402714932126,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 43750,
      x: 0.4005102040816326,
      y: 0.3755656108597285,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 44000,
      x: 0.3877551020408163,
      y: 0.3167420814479638,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 44250,
      x: 0.3877551020408163,
      y: 0.3891402714932127,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 44500,
      x: 0.3852040816326531,
      y: 0.47058823529411764,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 44750,
      x: 0.3979591836734694,
      y: 0.5067873303167421,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 45000,
      x: 0.4260204081632653,
      y: 0.5158371040723982,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 45250,
      x: 0.42091836734693877,
      y: 0.5656108597285068,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 45500,
      x: 0.44642857142857145,
      y: 0.6606334841628959,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 45750,
      x: 0.42857142857142855,
      y: 0.7330316742081447,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 46000,
      x: 0.40561224489795916,
      y: 0.7601809954751131,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 46250,
      x: 0.4005102040816326,
      y: 0.8099547511312217,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 46500,
      x: 0.3852040816326531,
      y: 0.7239819004524887,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 47000,
      x: 0.3877551020408163,
      y: 0.6742081447963801,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 47250,
      x: 0.375,
      y: 0.6244343891402715,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 47500,
      x: 0.41836734693877553,
      y: 0.6742081447963801,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 48000,
      x: 0.39285714285714285,
      y: 0.47058823529411764,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 48250,
      x: 0.3673469387755102,
      y: 0.48868778280542985,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 48500,
      x: 0.41581632653061223,
      y: 0.497737556561086,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 48750,
      x: 0.5,
      y: 0.3891402714932127,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 49000,
      x: 0.5102040816326531,
      y: 0.3665158371040724,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 49250,
      x: 0.5076530612244898,
      y: 0.40271493212669685,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 49500,
      x: 0.5816326530612245,
      y: 0.4253393665158371,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 49750,
      x: 0.5229591836734694,
      y: 0.4117647058823529,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 50000,
      x: 0.4770408163265306,
      y: 0.42081447963800905,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 50250,
      x: 0.45153061224489793,
      y: 0.45248868778280543,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 50500,
      x: 0.4387755102040816,
      y: 0.45248868778280543,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 50750,
      x: 0.44387755102040816,
      y: 0.45248868778280543,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 51000,
      x: 0.43112244897959184,
      y: 0.5158371040723982,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 51250,
      x: 0.46683673469387754,
      y: 0.4660633484162896,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 51500,
      x: 0.4846938775510204,
      y: 0.3755656108597285,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 51750,
      x: 0.4897959183673469,
      y: 0.3574660633484163,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 52000,
      x: 0.47959183673469385,
      y: 0.502262443438914,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 52250,
      x: 0.5076530612244898,
      y: 0.5339366515837104,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 52500,
      x: 0.5025510204081632,
      y: 0.5067873303167421,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 53000,
      x: 0.3239795918367347,
      y: 0.6063348416289592,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 53250,
      x: 0.34183673469387754,
      y: 0.6334841628959276,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 53500,
      x: 0.3596938775510204,
      y: 0.7375565610859729,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 53750,
      x: 0.35714285714285715,
      y: 0.6742081447963801,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 54000,
      x: 0.3494897959183674,
      y: 0.6018099547511312,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 54250,
      x: 0.3596938775510204,
      y: 0.4796380090497738,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 54500,
      x: 0.3647959183673469,
      y: 0.5429864253393665,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 54750,
      x: 0.3826530612244898,
      y: 0.6018099547511312,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 55000,
      x: 0.44642857142857145,
      y: 0.6787330316742082,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 55250,
      x: 0.48214285714285715,
      y: 0.7330316742081447,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 55500,
      x: 0.5102040816326531,
      y: 0.7828054298642534,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 56750,
      x: 0.6938775510204082,
      y: 0.8416289592760181,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 57000,
      x: 0.8316326530612245,
      y: 0.8778280542986425,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 57250,
      x: 0.9183673469387755,
      y: 0.8416289592760181,
    },
    {
      video_id: "",
      label: "",
      price: "",
      product_id: "",
      milliseconds: 57500,
      x: 0.9540816326530612,
      y: 0.9547511312217195,
    },
  ];

  const players = [
    {
      id: 1,
      name: "Lebron James",
      position: "Power Forward",
      imgSrc: "/players/lebron_james.png",
    },
    {
      id: 2,
      name: "Ben Simmons",
      position: "Power Forward",
      imgSrc: "/players/ben_simmons.png",
    },
    {
      Id: 3,
      name: "Russell Westbrook",
      position: "Point Guard",
      imgSrc: "/players/russell_westbrook.png",
    },
    {
      Id: 4,
      name: "kyrie irving",
      position: "Point Guard",
      imgSrc: "/players/kyrie_irving.png",
    },
    {
      Id: 5,
      name: "Malik Monk",
      position: "Shooting Guard",
      imgSrc: "/players/malik_monk.png",
    },
    {
      Id: 6,
      name: "Seth Curry",
      position: "Shooting Guard",
      imgSrc: "/players/seth_curry.png",
    },
    {
      Id: 7,
      name: "Talen-Horton Tucker",
      position: "Small Forward",
      imgSrc: "/players/talen_horton_tucker.png",
    },
    {
      Id: 8,
      name: "Kevin Durant",
      position: "Small Forward",
      imgSrc: "/players/kevin_durant.png",
    },
    {
      Id: 9,
      name: "Anthony Davis",
      position: "Center",
      imgSrc: "/players/anthony_davis.png",
    },
    {
      Id: 10,
      name: "Andre Drummond",
      position: "Center",
      imgSrc: "/players/andre_drummond.png",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Lebron James Jersey",
      price: "$5000",
      imgSrc: "/products/lebron_james_jersey.png",
    },
    {
      id: 2,
      name: "Kevin Durant Jersey",
      price: "$5000",
      imgSrc: "/products/kevin_durant_jersey.png",
    },
    {
      id: 3,
      name: "Russell Westbrook Jersey",
      price: "$3000",
      imgSrc: "/products/russell_westbrook_jersey.png",
    },
    {
      id: 4,
      name: "Nike Lebron Ambassador 13",
      price: "$4000",
      imgSrc: "/products/nike_lebron_ambassador_13.png",
    },
    {
      id: 5,
      name: "Seth Curry Jersey",
      price: "$2000",
      imgSrc: "/products/seth_curry_jersey.png",
    },
    {
      id: 6,
      name: "Malik Monk Jersey",
      price: "$4000",
      imgSrc: "/products/malik_monk_jersey.png",
    },
    {
      id: 7,
      name: "Anthony Davis Jersey",
      price: "$2000",
      imgSrc: "/products/anthony_davis_jersey.png",
    },
    {
      id: 8,
      name: "Air Jordan Zero 3",
      price: "$9000",
      imgSrc: "/products/air_jordan_zero_3.png",
    },
    {
      id: 9,
      name: "Nike KD 9",
      price: "$2000",
      imgSrc: "/products/nike_kd_9.png",
    },
    {
      id: 10,
      name: "Talen-Horton Tucker Jersey",
      price: "$1000",
      imgSrc: "/products/talen_horton_tucker_jersey.png",
    },
    {
      id: 11,
      name: "Andre Drummond Jersey",
      price: "$2000",
      imgSrc: "/products/andre_drummond_jersey.png",
    },
    {
      id: 12,
      name: "Ben Simmons Jersey",
      price: "$2000",
      imgSrc: "/products/ben_simmons_jersey.png",
    },
    {
      id: 13,
      name: "kyrie irving Jersey",
      price: "$2000",
      imgSrc: "/products/kyrie_irving_jersey.png",
    },
    {
      id: 14,
      name: "Nike kyrie 3",
      price: "$2000",
      imgSrc: "/products/nike_kyrie_3.png",
    },
  ];
  const bids = [
    {
      id: 1,
      name: "Los Angeles Lakers Jersey",
      playerName: "Lebron James",
      price: "50,000",
      imgSrc: "/bids/lebron_james_jersey.png",
    },
    {
      id: 2,
      name: "Yellow Lebron Sneakers",
      playerName: "Lebron James",
      price: "48,000",
      imgSrc: "/bids/yellow_lebron_sneakers.png",
    },

    {
      id: 3,
      name: "Los Angeles Lakers Jersey",
      playerName: "Russell Westbrook",
      price: "40,000",
      imgSrc: "/bids/russell_westbrook_jersey.png",
    },
    {
      id: 4,
      name: "Brooklyn Nets Jersey",
      playerName: "Seth Curry",
      price: "35,000",
      imgSrc: "/bids/seth_curry_jersey.png",
    },
    {
      id: 5,
      name: "Los Angeles Lakers Jersey",
      playerName: "Malik Monk",
      price: "30,000",
      imgSrc: "/bids/malik_monk_jersey.png",
    },
    {
      id: 6,
      name: "Los Angeles Lakers Jersey",
      playerName: "Anthony Davis",
      price: "25,000",
      imgSrc: "/bids/anthony_davis_jersey.png",
    },
    {
      id: 7,
      name: "Los Angeles Lakers Jersey",
      playerName: "Talen-Horton Tucker",
      price: "20,000",
      imgSrc: "/bids/talen-horton_tucker_jersey.png",
    },
    {
      id: 8,
      name: "Brooklyn Nets Jersey",
      playerName: "Andre Drummond",
      price: "15,000",
      imgSrc: "/bids/andre_drummond_jersey.png",
    },
    {
      id: 9,
      name: "Brooklyn Nets Jersey",
      playerName: "Ben Simmons",
      price: "14,000",
      imgSrc: "/bids/ben_simmons_jersey.png",
    },
    {
      id: 10,
      name: "Brooklyn Nets Jersey",
      playerName: "Kyrie Irving",
      price: "12,000",
      imgSrc: "/bids/kyrie_irving_jersey.png",
    },
    {
      id: 11,
      name: " Brooklyn Nets Jersey",
      playerName: "Kevin Durant",
      price: "10,000",
      imgSrc: "/bids/kevin_durant_jersey.png",
    },
  ];

  // const getLocation = (e) => {
  //   const clickPosX = e.nativeEvent.offsetX;
  //   const clickPosY = e.nativeEvent.offsetY;
  //   // console.log(e.target.clientWidth);
  //   const clickPosXPercentage = (clickPosX / e.target.clientWidth) * 100;
  //   const clickPosYPercentage = (clickPosY / e.target.clientHeight) * 100;
  //   // console.log(clickPosXPercentage * 100, clickPosYPercentage * 100);
  //   // setXPos(clickPosXPercentage);
  //   // setYPos(clickPosYPercentage);
  //   // console.log(clickPosYPercentage, clickPosXPercentage);
  // };

  // const startSequence = () => {
  //   setInterval(() => {
  //     setNum(num + 1);
  //     // console.log(num);
  //   }, 200);
  // };

  // useEffect(() => {
  //   setInterval(() => {
  //     setNum(num + 1);
  //     // console.log(num);
  //   }, 500);
  // }, [num]);

  useEffect(() => {
    if (isVideoPlaying) {
      const sampleVideo = document.getElementById("sampleVideo");
      setInterval(() => {
        const time = sampleVideo.currentTime;
        let currentTime = Math.round((time * 1000) / 250) * 250;
        // console.log(currentTime);
        // console.log(lebron_label);
        const allTags = labels.find((label) => {
          // if (currentTime === 250) {
          //   sampleVideo.currentTime = 500;
          // }
          if (label.milliseconds === currentTime)
            if (
              (currentTime > 21000 && currentTime < 32000) ||
              (currentTime > 43000 && currentTime < 55000) ||
              (currentTime > 9000 && currentTime < 14000)
            ) {
              return label.milliseconds === currentTime;
            }
          return 0;
        });
        // console.log(allTags);
        // setXValue(allTags?.x * 100);
        // setYValue(allTags?.y * 100);
        // console.log("Tag", allTags);
        if (allTags !== undefined) {
          // setXValue(
          //   ((allTags?.boundingBoxLeft * 1920 +
          //     (allTags?.boundingBoxWidth * 1920) / 2) /
          //     1920) *
          //     100
          // );
          // setYValue(
          //   ((allTags?.boundingBoxTop * 1080 +
          //     (allTags?.boundingBoxHeight * 1080) / 2) /
          //     1080) *
          //     100
          // );
          // setIsVisible(true);
          setStillRunning(true);
          setXValue(allTags?.x * 100);
          setYValue(allTags?.y * 100);
          // 54500
          if (
            (currentTime >= 54500 && currentTime <= 55000) ||
            (currentTime >= 13300 && currentTime <= 14000) ||
            currentTime === 13750 ||
            (currentTime >= 31500 && currentTime <= 32000)
          ) {
            console.log("this is the if", currentTime);

            setStillRunning(false);
            setYValue(95);
            setXValue(92);
            setTimeout(() => {
              setShouldAnimate(true);
            }, 800);

            setTimeout(() => {
              setShowTooltip(true);
              setShouldAnimate(false);
            }, 1000);
          }
        } else {
          // setYValue(0);
          // setXValue(0);
          // console.log("this is the else", currentTime);
          // setIsVisible(false);
        }

        // console.log(allTags?.y, allTags?.x);
      }, 500);

      // console.log("started playing");
    }

    if (!isVideoPlaying) {
      console.log("stopped playing");
    }
  }, [isVideoPlaying, yValue, labels]);

  // if (isVideoPlaying) {
  //   const videoInterval = setInterval(() => {
  //     console.log("hello");
  //   }, 1000);
  // }

  // if (isVideoPlaying) {
  //   console.log("stopped playing");
  // }

  // useEffect(() => {
  //   const numInterval = setInterval(() => {
  //     setNum((num) => {
  //       if (num === labels.length - 1) {
  //         return 0;
  //       }
  //       return num + 1;
  //     });
  //   }, 1000);

  //   // setTimeout(() => {
  //   //   // console.log("this ran");
  //   //   clearInterval(numInterval);
  //   //   setStillRunning(false);
  //   // }, 6000);

  //   return () => {
  //     clearInterval(numInterval);
  //   };
  // }, [labels.length]);

  // console.log(num);

  // useEffect(() => {
  //   if (!stillRunning) {
  //     setTimeout(() => {
  //       setShowTooltip(true);
  //     }, 900);
  //   }
  // }, [stillRunning]);

  // setInterval(() => {
  //   setNum(num + 1);
  //   // console.log(num);
  // }, 2000);

  // const yValue = () => {
  //   if (stillRunning) {
  //     return labels[num].y * 100;
  //   } else {
  //     // setShowTooltip(!showTooltip);
  //     return 90;
  //   }
  // };
  // const xValue = () => {
  //   if (stillRunning) {
  //     return labels[num].x * 100;
  //   } else {
  //     return 97;
  //   }
  // };
  const getOpacity = () => {
    if (stillRunning) {
      return 1;
    } else {
      // setShowTooltip(true);
      return 0.5;
    }
  };
  const getScale = () => {
    if (stillRunning) {
      return 1;
    } else {
      return 0;
    }
  };

  return (
    <div
      className="app"
      // onClick={(e) => {
      //   getLocation(e);
      // }}
    >
      <div className="wrapper">
        <div className="imageContainer">
          <video
            src="https://edekee-backend-main.s3.us-east-2.amazonaws.com/videos/lebron_james.mp4"
            className="sampleImage"
            id="sampleVideo"
            alt=""
            autoPlay
            controls
            muted
            // loop
            onEnded={() => {
              console.log("video ended");
            }}
            onPlay={() => {
              setIsVideoPlaying(true);
            }}
            onPause={() => {
              setIsVideoPlaying(false);
            }}
          />
          <div
            className="tag"
            style={{
              position: "absolute",
              top: `${yValue}%`,
              left: `${xValue}%`,
              opacity: `${getOpacity()}`,
              // visibility: `${isVisible ? "visible" : "hidden"}`,
              // scale: "2",
              transform: `scale(${getScale()})`,
            }}
          >
            <Lottie options={defaultOptions} />
          </div>

          <div
            className={shouldAnimate ? "productBag animate" : "productBag"}
            onClick={() => {
              setShowSidebar(!showSidebar);
              setTabContent(1);
              console.log("clicked tag");
            }}
          >
            {showTooltip && (
              <Tooltip
                title="Name of Player"
                TooltipState={showTooltip}
                setShowTooltip={setShowTooltip}
              ></Tooltip>
            )}
            <img src="subtract.svg" alt="" />
          </div>
        </div>
      </div>
      <div className={showSidebar ? "sidebar showSidebar" : "sidebar"}>
        <div className="sidebarHeader">
          <div className="sidebarHeaderWrapper">
            <div
              className="tab"
              onClick={() => {
                setTabContent(0);
              }}
            >
              {tabContent === 0 ? (
                <img src="playersActive.svg" alt="" className="tabIcon" />
              ) : (
                <img src="players.svg" alt="" className="tabIcon" />
              )}{" "}
              <p style={{ color: `${tabContent === 0 ? "#8D71FF" : ""}` }}>
                Players
              </p>{" "}
              <div
                className="underline"
                style={{
                  backgroundColor: `${tabContent === 0 ? "#8D71FF" : ""}`,
                }}
              ></div>
            </div>
            <div
              className="tab"
              onClick={() => {
                setTabContent(1);
              }}
            >
              {tabContent === 1 ? (
                <img src="bidsActive.svg" alt="" className="tabIcon" />
              ) : (
                <img src="bids.svg" alt="" className="tabIcon" />
              )}
              <p style={{ color: `${tabContent === 1 ? "#8D71FF" : ""}` }}>
                Bids
              </p>
              <div
                className="underline"
                style={{
                  backgroundColor: `${tabContent === 1 ? "#8D71FF" : ""}`,
                }}
              ></div>
            </div>{" "}
            <div
              className="tab"
              onClick={() => {
                setTabContent(2);
              }}
            >
              {tabContent === 2 ? (
                <img src="productsActive.svg" alt="" className="tabIcon" />
              ) : (
                <img src="products.svg" alt="" className="tabIcon" />
              )}{" "}
              <p style={{ color: `${tabContent === 2 ? "#8D71FF" : ""}` }}>
                Products
              </p>{" "}
              <div
                className="underline"
                style={{
                  backgroundColor: `${tabContent === 2 ? "#8D71FF" : ""}`,
                }}
              ></div>
            </div>{" "}
          </div>
        </div>

        <div className="sidebarBody">
          {tabContent === 0 ? (
            <div className="gridWrapper">
              {players.map((player) => {
                return (
                  <PlayerCard
                    key={player.id}
                    name={player.name}
                    position={player.position}
                    img={player.imgSrc}
                  />
                );
              })}
            </div>
          ) : tabContent === 1 ? (
            <div className="bidWrapper">
              {bids.map((bid) => (
                <BidCard
                  key={bid.id}
                  name={bid.name}
                  playerName={bid.playerName}
                  price={bid.price}
                  img={bid.imgSrc}
                />
              ))}
            </div>
          ) : tabContent === 2 ? (
            <div className="gridWrapper">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  img={product.imgSrc}
                />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

// [
//   {
//     video_id: "fere91jek0l64714sgr348",
//     label: "Mangola Wear",
//     price: "28000",
//     product_id: "fd626c90-4862-445d-be6b-cd358622fd63",
//     milliseconds: 0,
//     x: 0.62,
//     y: 0.43319268635724334,
//   },
//   {
//     video_id: "fere91jek0l64714sgr348",
//     label: "Mangola Wear",
//     price: "28000",
//     product_id: "fd626c90-4862-445d-be6b-cd358622fd63",
//     milliseconds: 500,
//     x: 0.495,
//     y: 0.46554149085794655,
//   },
//   {
//     video_id: "fere91jek0l64714sgr348",
//     label: "Mangola Wear",
//     price: "28000",
//     product_id: "fd626c90-4862-445d-be6b-cd358622fd63",
//     milliseconds: 1000,
//     x: 0.445,
//     y: 0.46272855133614627,
//   },
//   {
//     video_id: "fere91jek0l64714sgr348",
//     label: "Mangola Wear",
//     price: "28000",
//     product_id: "fd626c90-4862-445d-be6b-cd358622fd63",
//     milliseconds: 1500,
//     x: 0.4025,
//     y: 0.49226441631504925,
//   },
//   {
//     video_id: "fere91jek0l64714sgr348",
//     label: "Mangola Wear",
//     price: "28000",
//     product_id: "fd626c90-4862-445d-be6b-cd358622fd63",
//     milliseconds: 2000,
//     x: 0.405,
//     y: 0.5063291139240507,
//   },
//   {
//     video_id: "fere91jek0l64714sgr348",
//     label: "Mangola Wear",
//     price: "28000",
//     product_id: "fd626c90-4862-445d-be6b-cd358622fd63",
//     milliseconds: 2500,
//     x: 0.3675,
//     y: 0.44022503516174405,
//   },
//   {
//     video_id: "fere91jek0l64714sgr348",
//     label: "Mangola Wear",
//     price: "28000",
//     product_id: "fd626c90-4862-445d-be6b-cd358622fd63",
//     milliseconds: 3000,
//     x: 0.6325,
//     y: 0.4345991561181435,
//   },
//   {
//     video_id: "fere91jek0l64714sgr348",
//     label: "Mangola Wear",
//     price: "28000",
//     product_id: "fd626c90-4862-445d-be6b-cd358622fd63",
//     milliseconds: 3500,
//     x: 0.55,
//     y: 0.46554149085794655,
//   },
//   {
//     video_id: "fere91jek0l64714sgr348",
//     label: "Mangola Wear",
//     price: "28000",
//     product_id: "fd626c90-4862-445d-be6b-cd358622fd63",
//     milliseconds: 4000,
//     x: 0.5425,
//     y: 0.6343178621659634,
//   },
//   {
//     video_id: "fere91jek0l64714sgr348",
//     label: "Mangola Wear",
//     price: "28000",
//     product_id: "fd626c90-4862-445d-be6b-cd358622fd63",
//     milliseconds: 4500,
//     x: 0.5225,
//     y: 0.4880450070323488,
//   },
//   {
//     video_id: "fere91jek0l64714sgr348",
//     label: "Mangola Wear",
//     price: "28000",
//     product_id: "fd626c90-4862-445d-be6b-cd358622fd63",
//     milliseconds: 5000,
//     x: 0.6075,
//     y: 0.46835443037974683,
//   },
//   {
//     video_id: "fere91jek0l64714sgr348",
//     label: "Mangola Wear",
//     price: "28000",
//     product_id: "fd626c90-4862-445d-be6b-cd358622fd63",
//     milliseconds: 5500,
//     x: 0.555,
//     y: 0.459915611814346,
//   },
//   {
//     video_id: "fere91jek0l64714sgr348",
//     label: "Mangola Wear",
//     price: "28000",
//     product_id: "fd626c90-4862-445d-be6b-cd358622fd63",
//     milliseconds: 6000,
//     x: 0.495,
//     y: 0.46554149085794655,
//   },
//   {
//     video_id: "fere91jek0l64714sgr348",
//     label: "Mangola Wear",
//     price: "28000",
//     product_id: "fd626c90-4862-445d-be6b-cd358622fd63",
//     milliseconds: 6500,
//     x: 0.55,
//     y: 0.48523206751054854,
//   },
//   {
//     video_id: "fere91jek0l64714sgr348",
//     label: "Mangola Wear",
//     price: "28000",
//     product_id: "fd626c90-4862-445d-be6b-cd358622fd63",
//     milliseconds: 7000,
//     x: 0.33,
//     y: 0.5443037974683544,
//   },
// ];

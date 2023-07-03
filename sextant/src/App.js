import "./App.css";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
import IpAdress from "./IpAdress";
import Latency from "./Latency";

function App() {
  return (
    <div className="App">
      <Banner bannerName="Sextant" />
      <Exhibit exhibitTitle="IP Address">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Exhibit exhibitTitle="IPv4">
            <IpAdress ipType="ipv4"></IpAdress>
          </Exhibit>
          <Exhibit exhibitTitle="IPv6">
            <IpAdress ipType="ipv6"></IpAdress>
          </Exhibit>
        </div>
      </Exhibit>
      <Exhibit exhibitTitle="Latency">
        <Latency />
      </Exhibit>
    </div>
  );
}

export default App;

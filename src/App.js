import "./styles.css";
import Display from "./Display";

export default function App() {
  return (
    <div className="Äpp">
      <h1>Hello Students</h1>
      <h2>Props Function Example</h2>
      <div className="List">
        <Display name="Pooja" class="BCA 2" />
        <Display name="Lajja" class="BCA 2" />
        <Display name="Bhaves" class="BCA 2" />
        <Display name="Preet" class="BCA 2" />
        <Display name="Harshita" class="BCA 2" />
        <Display name="Karan" class="BCA 2" />
        <Display name="Rehan" class="BCA 2" />
      </div>
    </div>
  );
}

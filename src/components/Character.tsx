import "../styles/Character.css";
import Abilities from "./Abilities";
import Inventory from "./Inventory";

const Character = () => {
  return (
    <div className="character">
      <table>
        <tbody>
          <tr>
            <th>
              <Abilities />
            </th>
            <th>
              <Inventory />
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Character;

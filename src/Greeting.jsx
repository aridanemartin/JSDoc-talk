import PropTypes from "prop-types";
import { calculateCoordinates } from "./helpers/calculateCoordinates";

/**
 * A simple greeting component.
 * @param {object} props - The component props.
 * @param {string} props.name - The name to greet.
 * @param {string} [props.surname] - The surname to greet (Optional).
 * @param {string} [props.isDoctor] - True if
 * he/she is a Doctor (Optional).
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * //Example usage of Greeting component
 * <Greeting name="John" surname="Doe" isDoctor={false} />
 */
function Greeting({ name, surname, isDoctor }) {
  const doctorTag = isDoctor ? "Dr. " : "";
  const surnameElement = surname ? <h2>{surname}</h2> : null;

  calculateCoordinates(0, 0, 1);

  return (
    <>
      <h1>
        Hello, {doctorTag}
        {name}
        {` ${surnameElement}`}!
      </h1>
      <button onClick={() => calculateCoordinates(0, 0, 1)}>Calculate</button>
    </>
  );
}

// At build time, React will check that the props passed to the component match the types defined in the propTypes object.
// If the types don't match, React will log a warning to the console.
// Compiler Demo - !
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
  isDoctor: PropTypes.bool,
};

Greeting.defaultProps = {
  isDoctor: false,
};

export default Greeting;

// Cases in which you might want to use PropTypes:
// - You are using a library that doesn't have built-in TypeScript definitions.
// - You are incrementally migrating a JavaScript codebase to TypeScript.
// - You are working on a personal project and don't want to set up TypeScript.

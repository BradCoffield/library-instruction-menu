import styled from 'styled-components'
import Link from "next/link";

 

export default function Home() {
  return (
    <div>
      <p>
      
        Librarians at RMC specialize in information literacy instruction. We
        strive to help students become better researchers, well-equipped to
        utilize the resources available to them to conduct research effectively
        and ethically. We also strive to educate students such that they are
        empowered to be ethical, discerning information users and creators now
        and into the rest of their lives.
      </p>
      <p>To those ends we offer in-class (physical or with Google Meet) instruction sessions customized to your class's needs. In addition to this classic form of library instruction we now offer asyncronous video modules, with included assessments, that you can embed into your Moodle classrooms!</p>
      <p>This site is here to help you explore the options available to you!</p>
      <p><h2>Explore Learning Options</h2>
      <ul>
        <li> <Link href="/classroom-instruction">Classroom Instruction</Link> </li>
        <li><Link href="/asynchronous-instruction">Asynchronous Instruction</Link> </li>
      </ul>
      </p>
      <p><button>Contact Us</button></p>
    </div>
  );
}

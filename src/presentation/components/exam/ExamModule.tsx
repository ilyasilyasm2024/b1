import type { ExamModule as ExamModuleContent } from "../../../data/examModules";
import ExamSections from "./shared/ExamSections";
import LesenTeil1 from "./parts/LesenTeil1";
import LesenTeil2 from "./parts/LesenTeil2";
import LesenTeil3 from "./parts/LesenTeil3";
import LesenTeil4 from "./parts/LesenTeil4";
import LesenTeil5 from "./parts/LesenTeil5";
import HoerenTeil1 from "./parts/HoerenTeil1";
import HoerenTeil2 from "./parts/HoerenTeil2";
import HoerenTeil3 from "./parts/HoerenTeil3";
import HoerenTeil4 from "./parts/HoerenTeil4";
import Schreiben from "./parts/Schreiben";
import Sprechen from "./parts/Sprechen";

// One Modelltest (2 to 15) built from its content in data/examModules.
export default function ExamModule({ module }: { module: ExamModuleContent }) {
  const { id, folder, lesen, hoeren } = module;
  return (
    <ExamSections
      lesen={[
        <LesenTeil1 moduleId={id} data={lesen.teil1} />,
        <LesenTeil2 moduleId={id} dataA={lesen.teil2A} dataB={lesen.teil2B} source={lesen.teil2Source} />,
        <LesenTeil3 moduleId={id} data={lesen.teil3} />,
        <LesenTeil4 moduleId={id} data={lesen.teil4} exampleAnswer={lesen.teil4ExampleAnswer} heading={lesen.teil4Heading} />,
        <LesenTeil5 moduleId={id} data={lesen.teil5} instruction={lesen.teil5Instruction} />,
      ]}
      hoeren={[
        <HoerenTeil1 moduleId={id} folder={folder} data={hoeren.teil1} />,
        <HoerenTeil2 moduleId={id} folder={folder} data={hoeren.teil2} />,
        <HoerenTeil3 moduleId={id} folder={folder} data={hoeren.teil3} />,
        <HoerenTeil4 moduleId={id} folder={folder} data={hoeren.teil4} />,
      ]}
      schreiben={<Schreiben moduleId={id} data={module.schreiben} />}
      sprechen={<Sprechen moduleId={id} data={module.sprechen} />}
    />
  );
}

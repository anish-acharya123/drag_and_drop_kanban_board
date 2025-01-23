import ColumnAddComponent from "@/components/ColumnAdd";
import Dragdrop from "@/components/Dragdrop";
// import Random from "@/components/Random";
import RemoveAllTaskComponent, {
  TaskAddComponent,
} from "@/components/TaskAction";

export default function Home() {
  return (
    <section className="">
      <div className=" flex justify-center items-center py-4">
        <ColumnAddComponent />
        <RemoveAllTaskComponent />
        <TaskAddComponent />
      </div>
      <Dragdrop />
      {/* <Random /> */}
    </section>
  );
}

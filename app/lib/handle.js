import { updateDepartment } from "@/app/lib/actions";

const useUpdateDepartment = (id) => {
  const handleUpdateDepartment = async (formData, selectedYear) => {
    const existingData = department.yillar.find(
      (data) => data.yil === selectedYear
    );

    console.log("hey", existingData);
    if (existingData) {
    } else {
    }

    await updateDepartment(department);
  };

  return { handleUpdateDepartment };
};

export default useUpdateDepartment;

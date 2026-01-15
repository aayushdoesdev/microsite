import { defineStore } from "pinia";
import { makeRequest } from "@/request/request";
import endpoints from "@/request/endpoints";
import { ref } from "vue";

export const useProjectStore = defineStore("project", () => {
  const projectData = ref([]);
  const specificProjectData = ref([]);
  const sourcingManagerData = ref({});
  const pageNumber = ref(1);
  const pageSize = ref(10);
  const totalpages = ref(0);

  // GET ALL Blogs
  const getProjectData = async () => {
    try {
      const params = {
        pageSize: pageSize.value,
        pageNumber: pageNumber.value,
      };
      const response = await makeRequest(
        endpoints.projects,
        "GET",
        {},
        {},
        params,
        0
      );
      projectData.value = response?.data;
      totalpages.value = response?.data?.totalPages;
      pageSize.value = response?.data?.pageSize;
      pageNumber.value = response?.data?.pageNumber;
    } catch (error) {
      console.log("Error in fetching projects", error);
    }
  };

  //   Get Specific Blogs
  const getProjectByid = async (id) => {
    const projectId = id || "695ce360dfae219c1d7020a1";
    try {
      const response = await makeRequest(
        endpoints.projects,
        "GET",
        {},
        {},
        {},
        0,
        projectId
      );
      specificProjectData.value = response?.data?.data;
    } catch (error) {
      console.log("Error in fetching specific project", error);
    }
  };

  const getSourcingManagerById = async (id) => {
    const managerId = id || "68e6a437b71ee3a333f26a55";
    try {
      const response = await makeRequest(
        endpoints.sourcingManager,
        "GET",
        {},
        {},
        {},
        0,
        managerId
      );

      sourcingManagerData.value = response.data?.data?.user;
    } catch (error) {}
  };

  return {
    getProjectByid,
    specificProjectData,
    getSourcingManagerById,
    sourcingManagerData,
    totalpages,
    pageNumber,
    pageSize,
  };
});

export const chartDataFunc = (dynamicData, labelKey, dataSetKey, label) => {
    const data = {
      labels: dynamicData?.map((data) => data[labelKey]),
      datasets: [
        {
          label: label,
          data: dynamicData?.map((data) => data[dataSetKey]),
          backgroundColor: ["#79D2DE", "#EC6666"],
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    };
    return data;
  };
const tempData = [
  { tag_id: "123", gender: "male", latest_weight: 55 },
  { tag_id: "133", gender: "male", latest_weight: 65 },
  { tag_id: "143", gender: "male", latest_weight: 55 },
  { tag_id: "153", gender: "male", latest_weight: 75 },
];

export function load() {
  return { tempData };
}

export const actions = {
  addNew: async ({ cookies, request }) => {
    const data = await request.formData();

    tempData.unshift({
      tag_id: data.get("tag_id"),
      gender: data.get("gender"),
      latest_weight: data.get("latest_weight"),
    });
  },
};

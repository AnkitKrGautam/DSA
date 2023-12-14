const product = [
  {
    name: "shirt",
    price: 230,
    category: [
      {
        type: "shirt",
        subCategory: [
          {
            gender: [
              {
                type1: "male",
                type2: "Female",
                others: [{ type3: "Trans1", type4: "Homo" }],
              },
              {
                type5: "male",
                type6: "Female",
                others: [{ type3: "Trans2", type4: "Homo" }],
              },
            ],
          },
        ],
      },
      {
        type: "pant",
        subCategory: [
          {
            gender: [
              {
                type1: "male",
                type2: "Female",
                others: [{ type3: "Trans3", type4: "Homo" }],
              },
              {
                type5: "male",
                type6: "Female",
                others: [{ type3: "Trans4", type4: "Homo" }],
              },
            ],
          },
        ],
      },
      {
        type: "T-shirt",
        subCategory: [
          {
            gender: [
              {
                type1: "male",
                type2: "Female",
                others: [{ type3: "Trans5", type4: "Homo" }],
              },
              {
                type5: "male",
                type6: "Female",
                others: [{ type3: "Trans6", type4: "Homo" }],
              },
            ],
          },
        ],
      },
      {
        type: "half- shirt",
        subCategory: [
          {
            gender: [
              {
                type1: "male",
                type2: "Female",
                others: [{ type3: "Trans7", type4: "Homo" }],
              },
              {
                type5: "male",
                type6: "Female",
                others: [{ type3: "Trans8", type4: "Homo" }],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "brand shirt",
    price: 230,
    category: [
      {
        type: "shirt",
        subCategory: [
          {
            gender: [
              {
                type1: "male",
                type2: "Female",
                others: [{ type3: "Trans9", type4: "Homo" }],
              },
              {
                type5: "male",
                type6: "Female",
                others: [{ type3: "Trans10", type4: "Homo" }],
              },
            ],
          },
        ],
      },
      {
        type: "pant",
        subCategory: [
          {
            gender: [
              {
                type1: "male",
                type2: "Female",
                others: [{ type3: "Trans11", type4: "Homo" }],
              },
              {
                type5: "male",
                type6: "Female",
                others: [{ type3: "Trans12", type4: "Homo" }],
              },
            ],
          },
        ],
      },
      {
        type: "T-shirt",
        subCategory: [
          {
            gender: [
              {
                type1: "male",
                type2: "Female",
                others: [{ type3: "Trans13", type4: "Homo" }],
              },
              {
                type5: "male",
                type6: "Female",
                others: [{ type3: "Trans14", type4: "Homo" }],
              },
            ],
          },
        ],
      },
      {
        type: "half- shirt",
        subCategory: [
          {
            gender: [
              {
                type1: "male",
                type2: "Female",
                others: [{ type3: "Trans15", type4: "Homo" }],
              },
              {
                type5: "male",
                type6: "Female",
                others: [{ type3: "Trans16", type4: "Homo" }],
              },
            ],
          },
        ],
      },
    ],
  },
];

//Normal way

const type6 = product.map((product) =>
  product.category.map((cat) =>
    cat.subCategory.map((sub) =>
      sub.gender.map((gen) =>
        gen.others.map((oth) => console.log("type3 - ", oth.type3))
      )
    )
  )
);

// using promise in efficient way

const type7 = Promise.all(
  product.map((product) =>
    Promise.all(
      product.category.map((cat) =>
        Promise.all(
          cat.subCategory.map((sub) =>
            Promise.all(
              sub.gender.map((gen) =>
                Promise.all(
                  gen.others.map(
                    (oth) =>
                      new Promise((resolve, reject) => {
                        if (oth.type3) {
                          console.log("type3 - ", oth.type3);
                          resolve("typeee - ", oth.type3);
                        } else {
                          console.error("errrr");
                          reject(oth.type3);
                        }
                      })
                  )
                )
              )
            )
          )
        )
      )
    )
  )
)
  .then((value) => {
    console.log(value); // this will execute only when all the item get processed well
  })
  .catch((error) => {
    console.error("Error processsing", error); // this will come from reject
  });

// simplest promise example

const type8 = Promise.all(
  product.map((product) =>
    Promise.all(
      product.category.map((cat) =>
        Promise.all(
          cat.subCategory.map((sub) =>
            Promise.all(
              sub.gender.map((gen) =>
                Promise.all(
                  gen.others.map((oth) => {
                    return new Promise((resolve) => {
                      console.log("type3 - ", oth.type3);
                      resolve(oth.type3);
                    });
                  })
                )
              )
            )
          )
        )
      )
    )
  )
);

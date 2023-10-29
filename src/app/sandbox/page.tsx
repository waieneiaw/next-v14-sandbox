type FormData = {
  itemName: string;
};

function createItem(formData: FormData) {
  return new Promise((resolve) => {
    resolve({
      id: 1,
      itemName: formData.itemName,
    });
  });
}

export default function Page() {
  async function create(formData: FormData) {
    'use server';
    const id = await createItem(formData);
    return id;
  }

  return (
    <div className="flex w-full justify-center align-middle">
      <div className="flex border rounded-lg space-4 justify-center w-4/12 px-5 py-3">
        {/* @ts-expect-error Async Server Component */}
        <form action={create} className="flex flex-col w-full gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="itemName"
              className="block text-sm font-medium leading-6"
            >
              Item Name
            </label>
            <input
              className="flex w-full rounded-lg px-2 py-1 text-gray-900"
              type="text"
              name="itemName"
            />
          </div>
          <button
            className="flex rounded-lg border px-5 py-2 w-full justify-center"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

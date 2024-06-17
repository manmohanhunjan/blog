import { Circle } from './BlogCard'

export const BlogSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="flex justify-center ">
        <div className="grid grid-cols-12 px-10 w-full pt-10 max-w-screen-xl">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">
              <div className="h-4.5 bg-gray-200 rounded-full w-48 mb-4"></div>
            </div>
            <div className="pt-2">
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
            </div>
            <div className="pt-4">
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
          </div>
          <div className=" col-span-4">
            <div className="text-slate-600 text-lg">
              <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-4"></div>
            </div>
            <div className="flex w-full">
              <div className="pr-4 flex flex-col justify-center">
                <Circle />
              </div>
              <div>
                <div className="text-xl font-bold">
                  <div className="h-3.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                </div>
                <div className="pt-2 text-slate-500">
                  <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

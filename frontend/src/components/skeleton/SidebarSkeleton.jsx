const SidebarSkeleton = () => {
  return (
    <div className="flex w-52 flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="skeleton h-12 w-12 shrink-0 rounded-full "></div>
        <div className="flex justify-between gap-3">
          <div className="skeleton h-5 w-24 mt-2"></div>
          <div className="skeleton h-10 w-10 shrink-0 rounded-full ml-12"></div>
        </div>
      </div>
    </div>
  );
};
export default SidebarSkeleton;

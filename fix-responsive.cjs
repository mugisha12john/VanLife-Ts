const fs = require('fs');

function replaceInFile(path, replacements) {
    if (!fs.existsSync(path)) return;
    let content = fs.readFileSync(path, 'utf8');
    for (const [oldStr, newStr] of replacements) {
        content = content.split(oldStr).join(newStr);
    }
    fs.writeFileSync(path, content);
    console.log(`Updated ${path}`);
}

replaceInFile('src/components/Home.tsx', [
    ['className="max-w-[90vw] ml-20  h-[85vh] bg-cover bg-center flex flex-col items-center justify-center   mt-10"', 'className="w-[90%] max-w-5xl mx-auto min-h-[85vh] h-full bg-cover bg-center flex flex-col items-center justify-center rounded-xl p-6 my-10"'],
    ['className="max-w-125 text-white font-bold text-4xl"', 'className="max-w-2xl text-center text-white font-bold text-3xl md:text-5xl"'],
    ['className="font-light text-xl text-white mt-10 w-140"', 'className="font-light text-lg md:text-xl text-center text-white mt-10 px-4 w-full"'],
    ['className="bg-[#FF8C38] text-white font-bold text-lg w-125 mt-4 p-2 text-center rounded-2xl"', 'className="bg-[#FF8C38] text-white font-bold text-lg w-[90%] max-w-md mt-10 py-3 px-6 text-center rounded-lg shadow-md transition-all hover:bg-orange-500"']
]);

replaceInFile('src/components/About.tsx', [
    ['className="w-125"', 'className="w-full max-w-xl object-cover"'],
    ['className="text-3xl font-bold mt-10 w-125.5"', 'className="text-3xl font-bold mt-10 w-[90%] max-w-xl"'],
    ['className="w-125.5  p-2 mt-10 text-xl"', 'className="w-[90%] max-w-xl p-2 mt-6 text-lg md:text-xl"'],
    ['className="bg-[#FFCC8D] w-125 p-2 mt-10"', 'className="bg-[#FFCC8D] w-[90%] max-w-xl p-8 mt-10 mb-10 rounded-xl"'],
    ['className="font-bold text-2xl max-w-80  m-10 "', 'className="font-bold text-2xl mb-6"'],
    ['className="bg-black text-white p-2 rounded-xl font-semibold m-10 mt-0 mb-4"', 'className="bg-black text-white px-6 py-3 rounded-xl font-semibold inline-block"']
]);

replaceInFile('src/components/Vans.tsx', [
    ['className="van-list-container  p-20"', 'className="van-list-container px-6 py-10 md:p-20 max-w-7xl mx-auto"'],
    ['className="van-list grid grid-cols-2  gap-20 justify-items-center  mt-20"', 'className="van-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mt-10 w-full"'],
    ['className="max-w-2/3 rounded-xl"', 'className="w-full max-w-[400px] rounded-xl aspect-square object-cover"'],
    ['className="flex font-semibold text-xl justify-between max-w-60 mt-2"', 'className="flex font-semibold text-lg md:text-xl justify-between w-full max-w-[400px] mt-4 mb-2"']
]);

replaceInFile('src/components/VanDetail.tsx', [
    ['className="van-detail-container flex justify-center items-center flex-col ml-[30%] mt-10"', 'className="van-detail-container flex justify-center items-center flex-col mx-auto px-6 py-10 max-w-3xl"'],
    ['className="van-detail flex  items-start flex-col"', 'className="van-detail flex flex-col items-start w-full"'],
    ['className="w-1/2 rounded-xl"', 'className="w-full md:w-3/4 max-w-xl rounded-xl object-cover self-center"'],
    ['className="  w-96 mt-2"', 'className="w-full mt-2 text-xl"'],
    ['className=" font-400 text-lg w-125"', 'className="font-normal text-md md:text-lg w-full max-w-2xl mt-4 leading-relaxed"'],
    ['className="bg-[#FF8C38] text-white font-bold text-lg w-125 mt-4 p-2 text-center rounded-2xl"', 'className="bg-[#FF8C38] text-white font-bold text-lg w-full mt-8 p-4 text-center rounded-xl shadow-md transition-all hover:bg-orange-500"']
]);

replaceInFile('src/components/host/Dashboard.tsx', [
    ['className="flex justify-center flex-col items-center mt-10"', 'className="flex flex-col items-center mx-auto mt-10 px-4 w-full max-w-4xl"'],
    ['className="bg-[#FFEAD0]  w-137"', 'className="bg-[#FFEAD0] w-full rounded-2xl shadow-sm overflow-hidden"'],
    ['className="w-137 mt-10"', 'className="w-full mt-10 mb-20"']
]);

replaceInFile('src/components/host/HostVan.tsx', [
    ['className="flex flex-col items-center"', 'className="flex flex-col items-center w-full max-w-4xl mx-auto px-4"'],
    ['className="font-bold text-4xl"', 'className="font-bold text-3xl md:text-4xl text-left self-start mt-6 mb-4"']
]);

replaceInFile('src/components/host/HostVansList.tsx', [
    ['className="flex gap-10 mt-3 bg-white p-4 rounded-xl items-center"', 'className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-4 bg-white p-4 sm:p-6 rounded-2xl items-center shadow-sm w-full"'],
    ['<div className="w-full">', '<div className="w-full space-y-4">'],
    ['className="w-25 rounded-xl"', 'className="w-[100px] h-[100px] object-cover rounded-xl shrink-0"']
]);

replaceInFile('src/components/host/Income.tsx', [
    ['className="w-137"', 'className="w-full max-w-2xl px-4 mx-auto mt-10"']
]);

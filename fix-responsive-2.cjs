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

replaceInFile('src/components/host/HostVanDetail.tsx', [
    ['className="flex flex-col items-center"', 'className="flex flex-col items-start sm:items-center w-full max-w-4xl mx-auto px-4 mt-6 overflow-hidden"'],
    ['className="flex gap-10 mt-3"', 'className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-6 sm:items-center"'],
    ['className="w-40 rounded-xl"', 'className="w-full max-w-sm sm:w-40 rounded-xl object-cover shrink-0"']
]);

replaceInFile('src/components/host/HostVanInfo.tsx', [
    ['className="max-w-80"', 'className="w-full max-w-lg mt-2"']
]);

replaceInFile('src/components/host/HostVanPhoto.tsx', [
    ['className="w-40 mt-4 rounded-2xl"', 'className="w-full max-w-[200px] mt-4 rounded-2xl object-cover"']
]);

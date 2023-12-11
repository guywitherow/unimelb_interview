import json
import os

def generateJSObject():
    finalObject = {"genres": []}

    for folder_name, subfolders, files in os.walk('./assets/songs/music'):
        folderData = {"title": os.path.basename(folder_name), "data": []}

        for songName in files:
            songData = {"label": songName.removesuffix('.wav'), "value": songName}
            folderData["data"].append(songData)

        if folderData["title"] != "music":
            finalObject["genres"].append(folderData)
        

    return finalObject

#taken from W3 schools
def write_js_object_to_file(js_object, output_file):
    js_object_string = json.dumps(js_object, indent=2)
    with open(output_file, "w") as js_file:
        js_file.write("const myJsObject = ")
        js_file.write(js_object_string)
        js_file.write(";")

outputName = "FileNames.js"

finishedObject = generateJSObject()
write_js_object_to_file(finishedObject, outputName)


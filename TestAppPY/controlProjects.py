import os
import json
# count folders project in any profil and set the count in json :
# count KHALID :
directoryKHALID = r".\KHALID\projects"
itemsInKHALID = os.listdir(directoryKHALID)
countProjectsKHALID = len(itemsInKHALID)
# count ANAS :
directoryANAS = r".\ANAS\projects"
itemsInANAS = os.listdir(directoryANAS)
countProjectsANAS = len(itemsInANAS)

# count ZAKARIA :
directoryZAKARIA = r".\ZAKARIA\projects"
itemsInZAKARIA = os.listdir(directoryZAKARIA)
countProjectsZAKARIA = len(itemsInZAKARIA)
# count MOHAMED :
directoryMOHAMED = r".\MOHAMED\projects"
itemsInMOHAMED = os.listdir(directoryMOHAMED)
countProjectsMOHAMED = len(itemsInMOHAMED)
#Set the countProjects in DB (Jason) :
countProjects = {
    'KHALID' : countProjectsKHALID,
    'ANAS' : countProjectsANAS,
    'ZAKARIA': countProjectsZAKARIA,
    'MOHAMED': countProjectsMOHAMED,
}
jsonFile = "countProjects.json"
jsonString = json.dumps(countProjects)
countProjectsJSON = open(jsonFile, 'w')
countProjectsJSON.write(jsonString)
countProjectsJSON.close()
print("We Count all projects in all profils ___ DONE")

#Open files index in profils and count class 'python' :
# Cards KHALID :
filePath = r".\KHALID\index.html"
openIndex = open(filePath, 'r')
content = openIndex.read()
wordPython = "python"
countCardsKHALID = content.count(wordPython)
openIndex.close()
# Cards ANAS :
filePath = r".\ANAS\index.html"
openIndex = open(filePath, 'r')
content = openIndex.read()
wordPython = "python"
countCardsANAS = content.count(wordPython)
openIndex.close()
# Cards ZAKARIA :
filePath = r".\ZAKARIA\index.html"
openIndex = open(filePath, 'r')
content = openIndex.read()
wordPython = "python"
countCardsZAKARIA = content.count(wordPython)
openIndex.close()
# Cards MOHAMED :
filePath = r".\MOHAMED\index.html"
openIndex = open(filePath, 'r')
content = openIndex.read()
wordPython = "python"
countCardsMOHAMED = content.count(wordPython)
openIndex.close()
# Send Count Cards in Json File :
countCards = {
    'KHALID' : countCardsKHALID,
    'ANAS' : countCardsANAS,
    'ZAKARIA': countCardsZAKARIA,
    'MOHAMED': countCardsMOHAMED,
}

jsonFile = "countCards.json"
jsonString = json.dumps(countCards)
countCardsJSON = open(jsonFile, 'w')
countCardsJSON.write(jsonString)
countCardsJSON.close()
print("We Count all Cards in index.html for all profils ___ DONE")

# download infos from json :

# countProjects :
jsonFile = "countProjects.json"
openProjectsJSON = open(jsonFile, 'r')
countProjectsJSON = json.load(openProjectsJSON) #Dict of Number Projects
openProjectsJSON.close()

# countCards :
jsonFile = "countCards.json"
openCardsJSON = open(jsonFile, 'r')
countCardsJSON = json.load(openCardsJSON) #Dict of Number Cards
openCardsJSON.close()

# get keys in list :
keysDicts = list(countCardsJSON.keys())

#Index profils pages path :
khalidIndexPath = r".\KHALID\index.html"
anasIndexPath = r".\ANAS\index.html"
zakariaIndexPath = r".\ZAKARIA\index.html"
mohamedIndexPath = r".\MOHAMED\index.html"
listPathIndex = [khalidIndexPath,anasIndexPath,zakariaIndexPath,mohamedIndexPath]

# Boucle into this list to compare values cards and projects :
cardContent = '<div class="card python"></div>\n'
for i in range (len(keysDicts)):
    if countProjectsJSON[keysDicts[i]] > countCardsJSON[keysDicts[i]] :
        indexPage = listPathIndex[i]
        openIndex = open(indexPage, 'r')
        indexContent = openIndex.read()
        #find index of </main>  in the html :
        indexOfMain = indexContent.find('</main') # return index and -1 if not found anything
        #Number of diference between projects and cards :
        diference = countProjectsJSON[keysDicts[i]] - countCardsJSON[keysDicts[i]]
        if indexOfMain != -1 :
                                    #from start to index
            addCards = indexContent[:indexOfMain] + (cardContent * diference) + indexContent[indexOfMain:]
        openIndex.close()
        openIndex = open(indexPage, 'w')
        indexContent = openIndex.write(addCards)
        print(f'we add {diference} cards at {keysDicts[i]} profil ___DONE')
        openIndex.close()

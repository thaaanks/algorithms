#################################################
# 첫번째 문제
#################################################

person = ['Darth Vader', 'Leia','Han', 'R2S2']
relation = ['father', 'sister', 'brother in law', 'droid']

def relation_to_luke(a):
    if a in person:
        i = person.index(a)
        print("Luke, I am your %s." % relation[i])
    else:
        print ("it's a wrong name!")

a = input("Who are you? Give me a name.")
print("%s says:" %a)
relation_to_luke(a)


#################################################
# 두번째 문제
#################################################

userlist = []
multiplied = []

def get_multiplied_list(userlist):
    for u in userlist:
        multiplied.append(u*2)
    print(multiplied)
    print("You gave me three numbers: ", userlist, "and the multiplied values of them are:", multiplied)

a = input("Give me a number.")
ai = int(a)
userlist.append(ai)
b = input("Give me a second number")
bi = int(b)
userlist.append(bi)
c = input("Give me a third number")
ci = int(c)
userlist.append(ci)
print(userlist)

get_multiplied_list(userlist)
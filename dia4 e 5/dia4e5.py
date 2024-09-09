def adicao(x, y):
    return x + y

def subtracao(x, y):
    return x - y

def multiplicacao(x, y):
    return x * y

def divisao(x, y):
    if y == 0:
        return "Não é permitida a divisão por zero"
    return x / y

def calculadora():
    print("Selecione a operação: ")
    print("1. Adição")
    print("2. Subtração")
    print("3. Multiplicação")
    print("4. Divisão")

while True:
    calculadora()
    escolha = input("Escolha (1/2/3/4): ")

    if escolha in ('1', '2', '3', '4'):
        x = float(input("Digite o primeiro número: "))
        y = float(input("Digite o segundo número: "))

        if escolha == '1':
            print("Resultado:", adicao(x, y))
        elif escolha == '2':
            print("Resultado:", subtracao(x, y))
        elif escolha == '3':
            print("Resultado:", multiplicacao(x, y))
        elif escolha == '4':
            print("Resultado:", divisao(x, y))
    else:
        print("Escolha inválida.")

    continuar = input("Deseja fazer outra operação? (s/n): ")
    if continuar != 's':
        print("Calculadora finalizada.")
        break
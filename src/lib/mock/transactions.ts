import { Transaction, TransactionSortOption } from "@/lib/types/transactions";
import { sortTransactions } from "@/lib/utils/transactions-sort";

export const MOCK_TRANSACTIONS: Transaction[] = [
    {
        id: "1",
        date: "2024-01-15",
        description: "Salário Janeiro",
        category: "Salário",
        amount: 5500.00,
        type: "income",
        status: "completed"
    },
    {
        id: "2",
        date: "2024-01-14",
        description: "Supermercado Extra",
        category: "Alimentação",
        amount: -342.50,
        type: "expense",
        status: "completed"
    },
    {
        id: "3",
        date: "2024-01-13",
        description: "Netflix",
        category: "Entretenimento",
        amount: -55.90,
        type: "expense",
        status: "completed"
    },
    {
        id: "4",
        date: "2024-01-12",
        description: "Uber",
        category: "Transporte",
        amount: -28.40,
        type: "expense",
        status: "completed"
    },
    {
        id: "5",
        date: "2024-01-11",
        description: "Freelance Design",
        category: "Freelance",
        amount: 1200.00,
        type: "income",
        status: "completed"
    },
    {
        id: "6",
        date: "2024-01-10",
        description: "Conta de Luz",
        category: "Contas",
        amount: -185.30,
        type: "expense",
        status: "pending"
    },
    {
        id: "7",
        date: "2024-01-09",
        description: "Restaurante",
        category: "Alimentação",
        amount: -95.00,
        type: "expense",
        status: "completed"
    },
    {
        id: "8",
        date: "2024-01-08",
        description: "Academia",
        category: "Saúde",
        amount: -120.00,
        type: "expense",
        status: "completed"
    },
    {
        id: "9",
        date: "2024-01-07",
        description: "Farmácia",
        category: "Saúde",
        amount: -67.80,
        type: "expense",
        status: "completed"
    },
    {
        id: "10",
        date: "2024-01-06",
        description: "Gasolina",
        category: "Transporte",
        amount: -220.00,
        type: "expense",
        status: "completed"
    },
    {
        id: "11",
        date: "2024-01-05",
        description: "Spotify",
        category: "Entretenimento",
        amount: -21.90,
        type: "expense",
        status: "completed"
    },
    {
        id: "12",
        date: "2024-01-04",
        description: "Mercado Livre",
        category: "Compras",
        amount: -156.90,
        type: "expense",
        status: "completed"
    },
    {
        id: "13",
        date: "2024-01-03",
        description: "Aluguel",
        category: "Moradia",
        amount: -1500.00,
        type: "expense",
        status: "completed"
    },
    {
        id: "14",
        date: "2024-01-02",
        description: "Internet",
        category: "Contas",
        amount: -99.90,
        type: "expense",
        status: "pending"
    },
    {
        id: "15",
        date: "2024-01-01",
        description: "Bônus Ano Novo",
        category: "Bônus",
        amount: 800.00,
        type: "income",
        status: "completed"
    },
    {
        id: "16",
        date: "2023-12-30",
        description: "Supermercado",
        category: "Alimentação",
        amount: -287.40,
        type: "expense",
        status: "completed"
    },
    {
        id: "17",
        date: "2023-12-29",
        description: "Presente Natal",
        category: "Compras",
        amount: -450.00,
        type: "expense",
        status: "completed"
    },
    {
        id: "18",
        date: "2023-12-28",
        description: "Jantar Família",
        category: "Alimentação",
        amount: -320.00,
        type: "expense",
        status: "completed"
    },
    {
        id: "19",
        date: "2023-12-27",
        description: "Uber",
        category: "Transporte",
        amount: -42.30,
        type: "expense",
        status: "completed"
    },
    {
        id: "20",
        date: "2023-12-26",
        description: "Cinema",
        category: "Entretenimento",
        amount: -78.00,
        type: "expense",
        status: "completed"
    },
    {
        id: "21",
        date: "2023-12-25",
        description: "Freelance Web",
        category: "Freelance",
        amount: 2500.00,
        type: "income",
        status: "completed"
    },
    {
        id: "22",
        date: "2023-12-24",
        description: "Ceia de Natal",
        category: "Alimentação",
        amount: -520.00,
        type: "expense",
        status: "completed"
    },
    {
        id: "23",
        date: "2023-12-23",
        description: "Farmácia",
        category: "Saúde",
        amount: -89.50,
        type: "expense",
        status: "completed"
    },
    {
        id: "24",
        date: "2023-12-22",
        description: "Gasolina",
        category: "Transporte",
        amount: -195.00,
        type: "expense",
        status: "completed"
    },
    {
        id: "25",
        date: "2023-12-21",
        description: "Livros",
        category: "Educação",
        amount: -145.00,
        type: "expense",
        status: "completed"
    },
    {
        id: "26",
        date: "2023-12-20",
        description: "Conta de Água",
        category: "Contas",
        amount: -78.50,
        type: "expense",
        status: "completed"
    },
    {
        id: "27",
        date: "2023-12-19",
        description: "Restaurante",
        category: "Alimentação",
        amount: -112.00,
        type: "expense",
        status: "completed"
    },
    {
        id: "28",
        date: "2023-12-18",
        description: "Curso Online",
        category: "Educação",
        amount: -299.00,
        type: "expense",
        status: "completed"
    },
    {
        id: "29",
        date: "2023-12-17",
        description: "Supermercado",
        category: "Alimentação",
        amount: -398.70,
        type: "expense",
        status: "completed"
    },
    {
        id: "30",
        date: "2023-12-16",
        description: "Uber",
        category: "Transporte",
        amount: -35.20,
        type: "expense",
        status: "completed"
    },
    {
        id: "31",
        date: "2023-12-15",
        description: "Salário Dezembro",
        category: "Salário",
        amount: 5500.00,
        type: "income",
        status: "completed"
    },
    {
        id: "32",
        date: "2023-12-14",
        description: "Roupas",
        category: "Compras",
        amount: -280.00,
        type: "expense",
        status: "completed"
    },
    {
        id: "33",
        date: "2023-12-13",
        description: "Dentista",
        category: "Saúde",
        amount: -350.00,
        type: "expense",
        status: "completed"
    },
    {
        id: "34",
        date: "2023-12-12",
        description: "Cafeteria",
        category: "Alimentação",
        amount: -45.00,
        type: "expense",
        status: "completed"
    },
    {
        id: "35",
        date: "2023-12-11",
        description: "Estacionamento",
        category: "Transporte",
        amount: -25.00,
        type: "expense",
        status: "completed"
    },
    {
        id: "36",
        date: "2023-12-10",
        description: "Amazon Prime",
        category: "Entretenimento",
        amount: -14.90,
        type: "expense",
        status: "completed"
    },
    {
        id: "37",
        date: "2023-12-09",
        description: "Padaria",
        category: "Alimentação",
        amount: -38.50,
        type: "expense",
        status: "completed"
    },
    {
        id: "38",
        date: "2023-12-08",
        description: "Manutenção Carro",
        category: "Transporte",
        amount: -450.00,
        type: "expense",
        status: "completed"
    },
    {
        id: "39",
        date: "2023-12-07",
        description: "Pet Shop",
        category: "Pets",
        amount: -180.00,
        type: "expense",
        status: "completed"
    },
    {
        id: "40",
        date: "2023-12-06",
        description: "Freelance Consultoria",
        category: "Freelance",
        amount: 1800.00,
        type: "income",
        status: "completed"
    },
    {
        id: "41",
        date: "2023-12-05",
        description: "Supermercado",
        category: "Alimentação",
        amount: -312.80,
        type: "expense",
        status: "completed"
    },
    {
        id: "42",
        date: "2023-12-04",
        description: "Presente Aniversário",
        category: "Compras",
        amount: -150.00,
        type: "expense",
        status: "completed"
    },
    {
        id: "43",
        date: "2023-12-03",
        description: "Aluguel",
        category: "Moradia",
        amount: -1500.00,
        type: "expense",
        status: "completed"
    },
    {
        id: "44",
        date: "2023-12-02",
        description: "Farmácia",
        category: "Saúde",
        amount: -72.30,
        type: "expense",
        status: "completed"
    },
    {
        id: "45",
        date: "2023-12-01",
        description: "Restaurante",
        category: "Alimentação",
        amount: -135.00,
        type: "expense",
        status: "completed"
    }
];

export async function getPaginatedTransactions(
    page: number = 1,
    pageSize: number = 10,
    sortBy: TransactionSortOption = "date_desc"
): Promise<{
    data: Transaction[];
    total: number;
    totalPages: number;
}> {
    // Simulate network delay (client-side only)
    if (typeof window !== "undefined") {
        await new Promise((resolve) => setTimeout(resolve, 300));
    }

    const sorted = sortTransactions(MOCK_TRANSACTIONS, sortBy);
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const data = sorted.slice(start, end);
    const total = MOCK_TRANSACTIONS.length;
    const totalPages = Math.ceil(total / pageSize);

    return {
        data,
        total,
        totalPages
    };
}

export function getTransactionsTotalCount(): number {
    return MOCK_TRANSACTIONS.length;
}

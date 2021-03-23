"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunosController = void 0;
const core_1 = require("@overnightjs/core");
let AlunosController = class AlunosController {
    getAlunos(_, res) {
        res.send([
            {
                nome: "Gustavo Maciel",
                email: "gustavomaciel@gmail.com",
                senha: "123456",
                telefone: "99999-9999",
                faltas: 0,
                curso: "ADS",
                numMatricula: "0020010055",
                moduloAtual: "3",
                notas: [
                    {
                        aluno: 1,
                        disciplina: [
                            {
                                nome: "Banco de dados",
                                cargaHoraria: "60 horas",
                                horario: "18:30 as 21:10",
                                turno: "Noite",
                                professor: "Marcelo",
                                numAlunos: 60,
                            },
                        ],
                        primeiraNota: 10.0,
                        segundaNota: 7,
                        notaAtividade: 5,
                    },
                ],
            },
        ]);
    }
};
__decorate([
    core_1.Get(""),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AlunosController.prototype, "getAlunos", null);
AlunosController = __decorate([
    core_1.Controller("alunos")
], AlunosController);
exports.AlunosController = AlunosController;
//# sourceMappingURL=alunos.js.map
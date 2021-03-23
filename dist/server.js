"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupServer = void 0;
const core_1 = require("@overnightjs/core");
const express_1 = __importDefault(require("express"));
const alunos_1 = require("./controllers/alunos");
class SetupServer extends core_1.Server {
    constructor(port = 3000) {
        super();
        this.port = port;
    }
    async init() {
        this.setupExpress();
        this.setupControllers();
    }
    setupExpress() {
        this.app.use(express_1.default.json());
    }
    setupControllers() {
        const alunosController = new alunos_1.AlunosController();
        this.addControllers([alunosController]);
    }
    start() {
        this.app.listen(this.port, () => {
            console.info("Server listening on port: ", this.port);
        });
    }
}
exports.SetupServer = SetupServer;
//# sourceMappingURL=server.js.map
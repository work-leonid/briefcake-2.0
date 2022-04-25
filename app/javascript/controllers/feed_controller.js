import {Controller} from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["url", "errorMessage", "config", "inspiration", "preview", "empty", "formBg", "clearInput"]

    reset(event) {
        this.previewTarget.classList.add("hidden")
        this.emptyTarget.classList.remove("hidden")
        this.configTarget.classList.add("hidden")
        this.errorMessageTarget.classList.add("hidden")
        this.inspirationTarget.classList.remove("hidden")
        this.inspirationTarget.classList.add("scale-100")
        this.formBgTarget.classList.add("bg-indigo-500")

        this.clearInputTarget.classList.add("hidden")
    }
    check(event) {
        const element = this.urlTarget
        const url = element.value

        if (url.length === 0) {
            this.errorMessageTarget.classList.add("hidden")
        }
        else if  (url == "www") {
            this.inspirationTarget.classList.add("hidden")
            this.formBgTarget.classList.add("bg-purple-500")
            this.formBgTarget.classList.remove("bg-indigo-500")
            this.formBgTarget.classList.remove("bg-red-400")
            this.errorMessageTarget.classList.add("hidden")
            this.configTarget.classList.remove("hidden")
            this.previewTarget.classList.remove("hidden")
            this.emptyTarget.classList.add("hidden")
        } else if (url == "ddd") {
            this.inspirationTarget.classList.remove("hidden")
            this.errorMessageTarget.classList.remove("hidden")
            this.configTarget.classList.add("hidden")
            this.previewTarget.classList.add("hidden")
            this.emptyTarget.classList.remove("hidden")

            this.formBgTarget.classList.add("bg-red-400")
            this.formBgTarget.classList.remove("bg-indigo-500")
        } else {
            this.previewTarget.classList.add("hidden")
            this.emptyTarget.classList.remove("hidden")
            this.configTarget.classList.add("hidden")
            this.errorMessageTarget.classList.add("hidden")
            this.inspirationTarget.classList.remove("hidden")
            this.inspirationTarget.classList.add("scale-100")
            this.formBgTarget.classList.add("bg-indigo-500")
            this.clearInputTarget.classList.remove("hidden")
        }
    }

}

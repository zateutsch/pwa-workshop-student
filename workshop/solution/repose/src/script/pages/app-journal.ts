import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import localforage from 'localforage';
import { JournalEntry } from '../interfaces/journalEntry';

const dbName: string = "journal_entries";
var journalDB: any;

@customElement('app-journal')
export class AppJournal extends LitElement {
  
  @property()
  titlePlaceholder: string = "What do you want to title your journal entry?";
  @property()
  journalPlaceholder: string = "Write some thoughts, feelings, or ideas here.";


  static get styles() {
    return css`
      .main {
        padding: 0 48px;
        position: relative;
      }

      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .title__entry {
        width: 66vw;
        
      }

      .title__entry fluent-text-field {
        width: 66vw;
        color: #2E765E;
      }

      .journal__entry {
        width: 66vw;
      }

      .journal__entry fluent-text-area::part(control) {
        width: 66vw;
        color: #2E765E;
        height: 40vh;
      }

      fluent-button {
        border-radius: 15px;
        color: #45B08C;  
      }

      .submit fluent-button {
        width: 10em;
        margin: 25px;       
      }

      fluent-button::part(control):hover {
        color: #2E765E;
      }

      fluent-dialog::part(control) {
        max-height: 150px;
        max-width: 70vw;
        padding: 10px;  
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        background-image: linear-gradient(to bottom, #45B08C, #78c7ad);
        color: white;   
      }

      fluent-dialog h4 {
        text-align: center;
        margin-left: 5px;
        margin-right: 5px;
      }
    `;
  }

  constructor() {
    super();
    journalDB = localforage.createInstance({name: dbName});
  }

  async submitEntry() {
    let entry: JournalEntry = this.getJournalEntry();
    let entryCollection = await this.getEntryCollection(entry.date);

    if(entry.title && entry.entry) {
      this.pushNewEntry(entryCollection, entry);
      this.clearJournalFields();
    } else {
      this.showWarningDialog()
    }
  }

  getJournalEntry(): JournalEntry {
    let today: string = this.getTodaysDate();
    let currentTime: string = this.getCurrentTime();

    let journalEntry: JournalEntry = {
      date: today,
      time: currentTime,
      title: this.titleInput.value,
      entry: this.journalInput.value
    }

    return journalEntry;
  }

  getTodaysDate(): string {
    let date = new Date();
    return ((date.getMonth() + 1) as number).toString() + "/" + date.getDate().toString() + "/" + date.getFullYear().toString();
  }

  getCurrentTime(): string {
    let date = new Date();
    return date.getHours().toString() + ":" + date.getMinutes().toString();
  }

  async getEntryCollection(date: string) {
    let entryCollection = await journalDB.getItem(date);
    return entryCollection == null ? { } : entryCollection;
  }

  pushNewEntry(entryCollection: any, entry: JournalEntry) {
    entryCollection[entry.time] = entry;
    journalDB.setItem(entry.date, entryCollection);
  }

  clearJournalFields() {
    this.titleInput.value = "";
    this.journalInput.value = "";
  }

  showWarningDialog() {
    this.errorDialog.hidden = false;
  }

  dismissWarningDialog() {
    this.errorDialog.hidden = true;
  }

  @query('#titleInput')
  titleInput!: HTMLInputElement;

  @query('#journalInput')
  journalInput!: HTMLInputElement;

  @query('#errorDialog')
  errorDialog!: HTMLElement;
  

  render() {
    return html`
      <app-header enableBack="${true}"></app-header>
      
      <div class="main">
        <hero-decor></hero-decor>
        <div class="container">
          <div class="title__entry">
            <fluent-text-field id="titleInput" appearance="lightweight" placeholder=${this.titlePlaceholder}>
              <h2>Journal Title</h2>
            </fluent-text-field>
          </div>
          <div class="journal__entry">
            <fluent-text-area  id="journalInput" appearance="lightweight" placeholder=${this.journalPlaceholder}> 
              <h2>What's on your mind?</h2> 
            </fluent-text-area>
          </div>
          <div class="submit">
            <fluent-button appearance="lightweight" @click=${this.submitEntry}>
              Submit Entry
            </fluent-button>
          </div>
      </div>

      <fluent-dialog id="errorDialog" hidden=${true}>
        <h4> Make sure to add both a title and an entry for your daily mood journal.</h4>
        <fluent-button appearance="lightweight" @click=${this.dismissWarningDialog}>
          Try Again
        </fluent-button>
      </fluent-dialog>

    </div>
    `;
  }
}

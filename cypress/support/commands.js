 import { addMatchImageSnapshotCommand } from '@simonsmith/cypress-image-snapshot/command'

 addMatchImageSnapshotCommand()

// // can also add any default options to be used
// // by all instances of `matchImageSnapshot`


addMatchImageSnapshotCommand({
    failureThreshold: 0.2,
})